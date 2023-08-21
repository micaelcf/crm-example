import {
	Calendar,
	DollarSign,
	FileBadge2,
	Home,
	Kanban,
	LogIn,
	Mail,
	MessageSquare,
	User
} from 'lucide-svelte';

export type SideBarStruct = {
	content: {
		label: string;
		href: string;
		icon?: typeof Home;
		subMenu?: {
			label: string;
			href: string;
		}[];
	}[][];
	groups: string[];
};

export const sideBarStruct: SideBarStruct = {
	content: [
		[
			{
				label: 'Dashboard',
				href: '/',
				icon: Home
			},
			{
				label: 'E-commerce',
				href: '/e-commerce',
				icon: DollarSign,
				subMenu: [
					{
						label: 'Products',
						href: '/e-commerce/products'
					},
					{
						label: 'Billing',
						href: '/e-commerce/billing'
					},
					{
						label: 'Invoice',
						href: '/e-commerce/invoice'
					}
				]
			},
			{
				label: 'Users',
				href: '/users',
				icon: User
			},
			{
				label: 'Login',
				href: '/login',
				icon: LogIn
			}
		],
		[
			{
				label: 'Email',
				href: '/apps/email',
				icon: Mail
			},
			{
				label: 'Chat',
				href: '/apps/chat',
				icon: MessageSquare
			},
			{
				label: 'Calendar',
				href: '/apps/calendar',
				icon: Calendar
			},
			{
				label: 'Kanban',
				href: '/apps/kanban',
				icon: Kanban
			},
			{
				label: 'Invoices',
				href: '/apps/invoices',
				icon: FileBadge2
			}
		]
	],
	groups: ['', 'Apps', 'Pages']
};
