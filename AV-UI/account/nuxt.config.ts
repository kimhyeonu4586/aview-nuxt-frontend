// nuxt.config.ts
export default {
	router: {
	  extendRoutes(routes, resolve) {
		routes.push({
		  name: 'terms',
		  path: '/terms',
		  component: resolve(__dirname, 'account/pages/terms/terms.vue'),
		});
	  },
	},
  };
  