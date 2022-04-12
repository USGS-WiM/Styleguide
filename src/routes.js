// routes.js
// Defined routes for Vue router to use

let AppName = process.env.VUE_APP_COMPANY_NAME;


export const routes = [
	// * Default Page
	{
		path: "/",
		name: "home",
		component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue"),
		meta: {
			title: AppName + " — Home",
		}
	},
		//* Guides
		// Guide pages / apps
		// Colors
		{
			path: "/colors",
			name: "colors",
			component: () => import(/* webpackChunkName: "colors" */ "./views/guides/Colors.vue"),
			meta: {
				title: "Colors — " + AppName,
			}
		},
		// Logos & Branding
		{
			path: "/logos",
			name: "logos",
			component: () => import(/* webpackChunkName: "logos" */ "./views/guides/Logos.vue"),
			meta: {
				title: "Logos & Branding — " + AppName,
			}
		},
		// Icons & Map Symbols
		{
			path: "/icons",
			name: "icons",
			component: () => import(/* webpackChunkName: "icons" */ "./views/guides/Icons.vue"),
			meta: {
				title: "Icons — " + AppName,
			}
		},
		// Map Symbols
		{
			path: "/markers",
			name: "markers",
			component: () => import(/* webpackChunkName: "markers" */ "./views/guides/Markers.vue"),
			meta: {
				title: "Map Markers — " + AppName,
			}
		},
		// Animated Loaders
		{
			path: "/loaders",
			name: "loaders",
			component: () => import(/* webpackChunkName: "loaders" */ "./views/guides/Loaders.vue"),
			meta: {
				title: "Animated Loaders — " + AppName,
			}
		},
		// CSS Variables
		{
			path: "/variables",
			name: "variables",
			component: () => import(/* webpackChunkName: "variables" */ "./views/guides/Variables.vue"),
			meta: {
				title: "CSS Variables — " + AppName,
			}
		},
		// Metadata
		{
			path: "/meta",
			name: "meta",
			component: () => import(/* webpackChunkName: "meta" */ "./views/guides/Meta.vue"),
			meta: {
				title: "Meta — " + AppName,
			}
		},
		// USWDS
		{
			path: "/uswds",
			name: "uswds",
			component: () => import(/* webpackChunkName: "uswds" */ "./views/guides/USWDS.vue"),
			meta: {
				title: "USWDS — " + AppName,
			}
		},
		// Dark Mode
		{
			path: "/darkmode",
			name: "darkmode",
			component: () => import(/* webpackChunkName: "darkmode" */ "./views/guides/DarkMode.vue"),
			meta: {
				title: "Dark Mode — " + AppName,
			}
		},
		// Printing
		{
			path: "/printing",
			name: "printing",
			component: () => import(/* webpackChunkName: "printing" */ "./views/guides/Printing.vue"),
			meta: {
				title: "Printing — " + AppName,
			}
		},
		// Custom Components
		{
			path: "/components",
			name: "components",
			component: () => import(/* webpackChunkName: "components" */ "./views/guides/Components.vue"),
			meta: {
				title: "Components — " + AppName,
			}
		},
		
	//* Interface
	// Example page for seeing UI Elements
	{
		path: "/interface",
		name: "interface",
		component: () => import(/* webpackChunkName: "interface" */ "./views/other/interface/Interface.vue"),
		meta: {
			title: "Interface Examples — " + AppName,
		}
	},
	// 
	// ! Other Pages
	// 
	// * 404 Page
	{
		path: "/404/",
		name: "error-404",
		component: () => import(/* webpackChunkName: "error-404" */ "./views/other/Error404.vue"),
		meta: {
			title: "404 - Page not Found — " + AppName,
		}
	},
	// 
	// ! Redirect to 404 if route does not exist
	{
		path: "*",
		redirect: "/404/"
	}
];