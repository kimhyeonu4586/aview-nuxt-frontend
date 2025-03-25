import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
  meta: {
    name: "account",
    configKey: "account",
  },

  setup(moduleOptions, nuxt) {
    const themeDir = resolve(__dirname, "..");

    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "AccountLoginPage",
          path: "/account/login",
          file: resolve(themeDir, "account/pages/login/AccountLoginPage.vue"),
        },
        {
          name: "AccountRegisterPage",
          path: "/account/register",
          file: resolve(
            themeDir,
            "account/pages/register/AccountRegisterPage.vue"
          ),
        },
        {
          name: "AccountMyPage",
          path: "/account/mypage",
          file: resolve(themeDir, "account/pages/my/AccountMyPage.vue"),
        },
        {
          name: "AccountWithdrawPage",
          path: "/account/withdraw",
          file: resolve(
            themeDir,
            "account/pages/withdraw/AccountWithdrawPage.vue"
          ),
        },{
          name: "AdminCodeInputPage",
          path: "/account/admin-code",
          file: resolve(
            themeDir,
            "account/pages/adminLogin/AdminCodeInputPage.vue"
          ),
        }
        ,{
          name: "AccounTermsPage",
          path: "/account/terms",
          file: resolve(themeDir, "account/pages/terms/TermsPage.vue"),
        },
        

        {
          name: "AdminCodeInputPage",
          path: "/account/admin-code",
          file: resolve(
            themeDir,
            "account/pages/adminLogin/AdminCodeInputPage.vue"
          ),
        },

        {
          name: "GithubAdminLoginPage",
          path: "/account/admin-login",
          file: resolve(
            themeDir,
            "account/pages/adminLogin/GithubAdminLoginPage.vue"
          ),
        }
      );
    });

    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "store"));
    });
  },
});
