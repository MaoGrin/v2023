import { loadEnv, ConfigEnv } from "vite";
// 别名
import alias from "./vite/alias";
import { parseEnv } from "./vite/utils";
import setupPlugins from "./vite/plugins";
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  
  return {
    plugins: [...setupPlugins(isBuild, env)],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    //开发环境设置
    server: {
      proxy: {
        "/api": {
          //将/api访问转换为target
          target:env.VITE_API_URL,
          //跨域请求携带cookie
          changeOrigin: true,
          //url 重写删除`/api`
          rewrite: (path:string) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
};
