import { Ubuntu, Ubuntu_Mono, Ubuntu_Sans } from "next/font/google";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx","./src/**/**/*.tsx"],
  theme: {
  	fontSize: {
  		'10': '0.625rem',
  		'12': '0.75rem',
  		'14': '0.875rem',
  		'16': '1rem',
  		'18': '1.125rem',
  		'19': '1.19rem',
  		'20': '1.25rem',
  		'24': '1.5rem',
  		'28': '1.75rem',
  		'32': '2rem',
  		'36': '2.25rem'
  	},
  	fontWeight: {
  		'100': '100',
  		'200': '200',
  		'300': '300',
  		'400': '400',
  		'500': '500',
  		'600': '600',
  		'700': '700',
  		'800': '800',
  		'900': '900'
  	},
  	extend: {
  		fontFamily: {
  			ubuntu: [
  				'var(--font-ubuntu)',
                    ...fontFamily.sans
                ],
  			'ubuntu-mono': [
  				'var(--font-ubuntu-mono)',
                    ...fontFamily.mono
                ],
  			'ubuntu-sans': [
  				'var(--font-ubuntu-sans)',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
			grey: 'rgb(var(--gray) / <alpha-value>)',
  			blackamber: 'rgb(var(--blackamber) / <alpha-value>)',
  			blackbrown: 'rgb(var(--blackbrown) / <alpha-value>)',
  			cursedblack: 'rgb(var(--cursedblack) / <alpha-value>)',
  			anthracitegrey: 'rgb(var(--anthracitegrey) / <alpha-value>)',
  			green: 'rgb(var(--green) / <alpha-value>)',
  			yellow: 'rgb(var(--yellow) / <alpha-value>)',
  			red: 'rgb(var(--red) / <alpha-value>)',
  			white: 'rgb(var(--white) / <alpha-value>)',
  			text: 'rgb(var(--text) / <alpha-value>)',
  			sub: 'rgb(var(--sub) / <alpha-value>)',
  			'sub-secondary': 'rgb(var(--sub-secondary) / <alpha-value>)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			'2': '0.125rem',
  			'4': '0.25rem',
  			'6': '0.375rem',
  			'8': '0.5rem',
  			'10': '0.625rem',
  			'12': '0.75rem',
  			'14': '0.875rem',
  			'16': '1rem',
  			'18': '1.125rem',
  			'20': '1.25rem',
  			'24': '1.5rem',
  			'30': '1.875rem',
  			'40': '2.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		minWidth: {
  			'0': '0px',
  			px: '1px',
  			'0.5': '0.125rem',
  			'1': '0.25rem',
  			'1.5': '0.375rem',
  			'2': '0.5rem',
  			'2.5': '0.625rem',
  			'3': '0.75rem',
  			'3.5': '0.875rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'72': '18rem',
  			'80': '20rem',
  			'88': '22rem',
  			'96': '24rem',
  			'1/2': '50%',
  			'1/3': '33.333333%',
  			'2/3': '66.666667%',
  			'1/4': '25%',
  			'2/4': '50%',
  			'3/4': '75%',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'1/6': '16.666667%',
  			'2/6': '33.333333%',
  			'3/6': '50%',
  			'4/6': '66.666667%',
  			'5/6': '83.333333%',
  			'1/12': '8.333333%',
  			'2/12': '16.666667%',
  			'3/12': '25%',
  			'4/12': '33.333333%',
  			'5/12': '41.666667%',
  			'6/12': '50%',
  			'7/12': '58.333333%',
  			'8/12': '66.666667%',
  			'9/12': '75%',
  			'10/12': '83.333333%',
  			'11/12': '91.666667%',
  			popup: 'var(--popup-min-width)'
  		},
  		maxWidth: {
  			'0': '0px',
  			px: '1px',
  			'0.5': '0.125rem',
  			'1': '0.25rem',
  			'1.5': '0.375rem',
  			'2': '0.5rem',
  			'2.5': '0.625rem',
  			'3': '0.75rem',
  			'3.5': '0.875rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'72': '18rem',
  			'80': '20rem',
  			'88': '22rem',
  			'96': '24rem',
  			'1/2': '50%',
  			'1/3': '33.333333%',
  			'2/3': '66.666667%',
  			'1/4': '25%',
  			'2/4': '50%',
  			'3/4': '75%',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'1/6': '16.666667%',
  			'2/6': '33.333333%',
  			'3/6': '50%',
  			'4/6': '66.666667%',
  			'5/6': '83.333333%',
  			'1/12': '8.333333%',
  			'2/12': '16.666667%',
  			'3/12': '25%',
  			'4/12': '33.333333%',
  			'5/12': '41.666667%',
  			'6/12': '50%',
  			'7/12': '58.333333%',
  			'8/12': '66.666667%',
  			'9/12': '75%',
  			'10/12': '83.333333%',
  			'11/12': '91.666667%',
  			popup: 'var(--popup-max-width)',
  			input: 'var(--input-max-width)',
  			select: 'var(--select-max-width)'
  		},
  		minHeight: {
  			'0': '0px',
  			px: '1px',
  			'0.5': '0.125rem',
  			'1': '0.25rem',
  			'1.5': '0.375rem',
  			'2': '0.5rem',
  			'2.5': '0.625rem',
  			'3': '0.75rem',
  			'3.5': '0.875rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'72': '18rem',
  			'80': '20rem',
  			'88': '22rem',
  			'96': '24rem',
  			'1/2': '50%',
  			'1/3': '33.333333%',
  			'2/3': '66.666667%',
  			'1/4': '25%',
  			'2/4': '50%',
  			'3/4': '75%',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'1/6': '16.666667%',
  			'2/6': '33.333333%',
  			'3/6': '50%',
  			'4/6': '66.666667%',
  			'5/6': '83.333333%',
  			'1/12': '8.333333%',
  			'2/12': '16.666667%',
  			'3/12': '25%',
  			'4/12': '33.333333%',
  			'5/12': '41.666667%',
  			'6/12': '50%',
  			'7/12': '58.333333%',
  			'8/12': '66.666667%',
  			'9/12': '75%',
  			'10/12': '83.333333%',
  			'11/12': '91.666667%',
  			screen: '100dvh',
  			page: 'var(--page-height)',
  			popup: 'var(--popup-min-height)'
  		},
  		maxHeight: {
  			'0': '0px',
  			px: '1px',
  			'0.5': '0.125rem',
  			'1': '0.25rem',
  			'1.5': '0.375rem',
  			'2': '0.5rem',
  			'2.5': '0.625rem',
  			'3': '0.75rem',
  			'3.5': '0.875rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'72': '18rem',
  			'80': '20rem',
  			'88': '22rem',
  			'96': '24rem',
  			'1/2': '50%',
  			'1/3': '33.333333%',
  			'2/3': '66.666667%',
  			'1/4': '25%',
  			'2/4': '50%',
  			'3/4': '75%',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'1/6': '16.666667%',
  			'2/6': '33.333333%',
  			'3/6': '50%',
  			'4/6': '66.666667%',
  			'5/6': '83.333333%',
  			'1/12': '8.333333%',
  			'2/12': '16.666667%',
  			'3/12': '25%',
  			'4/12': '33.333333%',
  			'5/12': '41.666667%',
  			'6/12': '50%',
  			'7/12': '58.333333%',
  			'8/12': '66.666667%',
  			'9/12': '75%',
  			'10/12': '83.333333%',
  			'11/12': '91.666667%',
  			screen: '100dvh',
  			page: 'var(--page-height)',
  			popup: 'var(--popup-max-height)'
  		},
  		height: {
  			page: 'var(--page-height)',
  			screen: '100dvh'
  		},
  		padding: {
  			page: 'var(--page-padding)'
  		},
  		margin: {
  			page: 'var(--page-margin)'
  		},
  		gap: {
  			page: 'var(--page-gap)'
  		},
  		inset: {
  			page: 'var(--page-padding)'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('tailwind-scrollbar'),
],
} satisfies Config;
