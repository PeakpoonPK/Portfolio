export type Project = {
    id: number;
    title: string;
    category: string;
    type: 'web' | 'mobile';
    description: string;
    role: string;
    techStack: string[];
    images: string[];
    keyFeatures: string[];
    problemSolution: {
        problem: string;
        solution: string;
        impact: string;
    };
    links?: {
        demo?: string;
        github?: string;
    };
};

export const projects: Project[] = [
    {
        id: 1,
        title: 'Pawcare Web',
        category: 'Veterinary Nutrition Formula Calculator',
        type: 'web',
        description: 'A web-based application designed to help veterinarians calculate customized nutrition formulas for pets based on medical conditions, weight, and dietary requirements.',
        role: 'Fontend developer & UX/UI designer & Product owner',
        techStack: ['Next.js', 'TypeScript', 'React', 'MUI', 'Node.js', 'MongoDB'],
        images: [
            '/project/pawcareWeb/Screenshot 2026-02-11 155533.png',
            '/project/pawcareWeb/Screenshot 2026-02-11 001256.png',
            '/project/pawcareWeb/Screenshot 2026-02-11 001620.png',
            '/project/pawcareWeb/Screenshot 2026-02-11 151535.png',
            '/project/pawcareWeb/Screenshot 2026-02-11 151628.png',
            '/project/pawcareWeb/Screenshot 2026-02-11 151728.png'
        ],
        keyFeatures: ['Nutrition Formula Calculator', 'Patient Records', 'Order management', 'Queue management'],
        problemSolution: {
            problem: 'Manual nutrition calculations and complex Excel sheets increase time consumption and risk of human error for veterinarians.',
            solution: 'An intelligent web-based nutrition calculator that automates energy requirements and formula computation in real time.',
            impact: 'Reduced calculation time by over 50% and improved accuracy in customized diet planning.'
        }
    },
    {
        id: 2,
        title: 'HVAC Monitoring System',
        category: 'Healthcare Infrastructure Monitoring',
        type: 'web',
        description: 'A real-time HVAC and operating room equipment monitoring platform designed to ensure environmental control standards in surgical rooms. The system streams live data to a central company dashboard, enabling immediate issue detection and response across multiple hospitals.',
        role: 'Frontend developer & UX/UI designer',
        techStack: ['Project currently in discovery and planning stage.'],
        images: [
            '/project/hvac/dashboard.jpg',
            '/project/hvac/graph.jpg',
            '/project/hvac/notifications history.png',
            '/project/hvac/rule management - add new rule - telemetry.png',
            '/project/hvac/rule management.png',
            '/project/hvac/SCADA.jpg'
        ],
        keyFeatures: [
            'Real-time Environmental Data Monitoring',
            'Multi-Hospital Centralized Dashboard',
            'Severity-based Alert Configuration',
            'Line OA Instant Notifications',
            'Graph Analytics & SCADA Visualization'
        ],
        problemSolution: {
            problem: 'Operating room HVAC systems lacked centralized real-time monitoring, delaying issue detection and increasing the risk of environmental control failures.',
            solution: 'Designed a real-time monitoring platform with centralized dashboards, severity-based alert systems, SCADA visualization, and automated Line OA notifications.',
            impact: 'Enabled immediate incident response, improved operational reliability across multiple hospitals, and enhanced compliance with surgical environment standards.'
        }
    },
    {
        id: 3,
        title: 'SmartOR',
        category: 'Operating Room Management',
        type: 'web',
        description: 'A smart operating room scheduling system designed to streamline surgical booking and improve coordination across departments. The platform provides calendar-based scheduling, weekly planning, and real-time synchronization with digital signage outside operating rooms.',
        role: 'UX/UI Designer & Product Strategist',
        techStack: ['Project currently in planning and system design phase.'],
        images: [
            '/project/smartor/Home.jpg',
            '/project/smartor/calendar.jpg',
            '/project/smartor/table.jpg',
            '/project/smartor/room.jpg',
            '/project/smartor/booking.jpg',
        ],
        keyFeatures: [
            'Calendar-based Operating Room Scheduling',
            'Weekly Surgical Planning View',
            'Real-time Booking Updates',
            'Digital Door Signage Integration',
            'Multi-department Coordination'
        ],
        problemSolution: {
            problem: 'Operating room bookings were managed manually or across fragmented systems, causing scheduling conflicts and lack of real-time visibility for surgical teams.',
            solution: 'Designed a centralized operating room scheduling platform with calendar and weekly views, integrated with real-time digital room signage display.',
            impact: 'Reduced scheduling conflicts, improved surgical workflow coordination, and enhanced visibility of operating room utilization.'
        }
    },
    {
        id: 4,
        title: 'Pawcare App',
        category: 'Mobile Application',
        type: 'mobile',
        description: 'a mobile application designed for pet owners to monitor their pets’ health after dietary changes, track progress over time, and stay connected with veterinary specialists. The app bridges daily pet care with professional veterinary support, ensuring continuity in nutrition-based treatment plans.',
        role: 'UX/UI designer & Product owner',
        techStack: ['Project currently in discovery and planning stage.'],
        images: [
            '/project/pawcareAppication/Group 14.png',
            '/project/pawcareAppication/Group 15.png',
            '/project/pawcareAppication/Group 16.png',
            '/project/pawcareAppication/Group 17.png',
            '/project/pawcareAppication/Group 19.png',
            '/project/pawcareAppication/Group 21.png',
            '/project/pawcareAppication/Group 23.png',
            '/project/pawcareAppication/Group 27.png',
            '/project/pawcareAppication/Group 29.png',
            '/project/pawcareAppication/Group 31.png'
        ],
        keyFeatures: ['Specialist Appointment Booking', 'Data Sharing with Veterinarian', 'Health & Diet Tracking', 'Reorder Previous Diet Formula'],
        problemSolution: {
            problem: 'Monitoring pets’ response to therapeutic diets was inconsistent, making follow-ups and treatment adjustments difficult.',
            solution: 'Created Pawcare, an integrated pet health tracking app with progress logs, specialist booking, and one-click diet reordering.',
            impact: 'Strengthened long-term treatment adherence and increased efficiency in nutrition-based care management.'
        }
    },
    {
        id: 5,
        title: 'IOC Dashboard',
        category: 'Intelligent Operation Center',
        type: 'web',
        description: 'A real-time dashboard for monitoring hospital operations, creating actionable insights from complex data streams.',
        role: 'UX/UI designer ',
        techStack: ['Project currently in discovery and planning stage.'],
        images: [
            '/project/ioc/Screenshot 2026-02-11 172549.png',
            '/project/ioc/Screenshot 2026-02-11 172643.png',
            '/project/ioc/Screenshot 2026-02-11 172744.png',
            '/project/ioc/Screenshot 2026-02-11 172831.png',
            '/project/ioc/Screenshot 2026-02-11 172859.png',
            '/project/ioc/Screenshot 2026-02-11 172919.png',
            '/project/ioc/Screenshot 2026-02-11 172941.png',
            '/project/ioc/Screenshot 2026-02-11 173003.png'
        ],
        keyFeatures: ['Real-time Data Visualization', 'Complex Filtering', 'Automated Alerts', 'AI Assistant'],
        problemSolution: {
            problem: 'Reimbursement data from multiple healthcare schemes was scattered across systems, limiting visibility into revenue performance and departmental trends.',
            solution: 'Developed a unified IOC dashboard that integrates multi-source financial data into real-time analytics with comparative and drill-down capabilities.',
            impact: 'Enhanced transparency across funding sources and supported strategic planning with actionable operational insights.'
        }
    },
    {
        id: 6,
        title: 'Flow',
        category: 'Workflow Automation',
        type: 'web',
        description: 'An enterprise document workflow automation platform designed to streamline internal processes, similar to Microsoft Power Automate, enabling organizations to manage approvals, document versions, and intelligent task routing in one unified system.',
        role: 'Full Stack Developer & UX/UI Designer',
        techStack: ['Next.js', 'React', 'MUI', 'Tailwind CSS', 'React Flow', 'Node.js', 'PostgreSQL', 'Prisma'],
        images: [
            '/project/flow/Screenshot 2026-02-12 105430.png',
            '/project/flow/Screenshot 2026-02-12 105516.png',
            '/project/flow/Screenshot 2026-02-12 105605.png',
            '/project/flow/Screenshot 2026-02-12 105649.png',
            '/project/flow/Screenshot 2026-02-12 105839.png',
            '/project/flow/Screenshot 2026-02-12 110011.png',
            '/project/flow/Screenshot 2026-02-12 110113.png',
            '/project/flow/Screenshot 2026-02-12 110219.png'
        ],
        keyFeatures: [
            'Document Approval Workflow',
            'Advanced Flow Builder for Complex Processes',
            'Document Management & Version Control',
            'Intelligent Task Assignment',
            'Full Audit Trail & Approval Tracking'
        ],
        problemSolution: {
            problem: 'Organizations relied on manual document routing and email-based approvals, resulting in delays, version confusion, and lack of transparency in approval processes.',
            solution: 'Developed a visual workflow automation platform that enables structured document approvals, complex process design, version control, and intelligent auto-assignment of responsible personnel.',
            impact: 'Accelerated internal document processing, reduced approval turnaround time, and improved transparency with full traceability across organizational workflows.'
        }
    },
    {
        id: 7,
        title: 'Univa',
        category: 'Ultrasound Utilization Management',
        type: 'web',
        description: 'A centralized ultrasound utilization management platform designed to monitor machine usage across departments and rooms, track maintenance history, and support data-driven decisions on equipment capacity and investment planning.',
        role: 'UX/UI Designer',
        techStack: ['Project currently in discovery and planning stage.'],
        images: [
            '/project/univa/Home.png',
            '/project/univa/Home@2x.png',
            '/project/univa/Log in.png',
            '/project/univa/Machine maintence-1.png',
            '/project/univa/Machine maintence.png',
            '/project/univa/Machine management --- Register new machine.png',
            '/project/univa/Machine management.png',
            '/project/univa/Report- Utilization-1.png',
            '/project/univa/Report- Utilization-2.png',
            '/project/univa/Report- Utilization.png',
            '/project/univa/User management --- Register new user.png',
            '/project/univa/User management.png'
        ],
        keyFeatures: [
            'Real-time Ultrasound Utilization Monitoring',
            'Department & Room-based Usage Analytics',
            'Maintenance & Repair Tracking',
            'Centralized Equipment Database',
            'Capacity & Investment Evaluation Dashboard'
        ],
        problemSolution: {
            problem: 'Ultrasound machines were managed separately across departments, making it difficult to monitor usage volume, maintenance records, and overall equipment sufficiency.',
            solution: 'Designed a centralized monitoring platform that consolidates utilization data, maintenance history, and machine records into a single dashboard for operational visibility.',
            impact: 'Improved resource allocation, supported data-driven procurement decisions, and reduced the risk of underutilized or overburdened equipment.'
        }
    },
    {
        id: 8,
        title: 'Navni',
        category: 'Transport & Queue Booking System',
        type: 'mobile',
        description: 'An academic group project developed as a public transport queue-booking application, similar to MuvMi, designed for managing shared ride services such as Thai public tuk-tuks. The system includes booking management, wallet top-up functionality, and role-based access control.',
        role: 'Fullstack Developer & UI/UX Designer',
        techStack: ['Node.js', 'Express.js', 'JavaScript', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS', 'Socket.io'],
        images: [
            '/project/navni/Home Page.png',
            '/project/navni/Live chat.png',
            '/project/navni/Login Page.png',
            '/project/navni/My Wallet.png',
            '/project/navni/Number people.png',
            '/project/navni/Register.png',
            '/project/navni/Taxi Page.png',
            '/project/navni/Waiting.png'
        ],
        keyFeatures: [
            'Ride & Queue Booking System',
            'Digital Wallet & Top-up',
            'Role-based Access Management (User / Driver / Admin)',
            'Real-time Booking Status',
            'Live Chat Communication'
        ],
        problemSolution: {
            problem: 'Managing shared public transport queues manually can lead to long waiting times, unclear availability, and inefficient coordination between drivers and passengers.',
            solution: 'Built a ride-booking and queue management mobile application with wallet integration and role-based system control to streamline passenger-driver coordination.',
            impact: 'Demonstrated improved booking transparency and real-time coordination in a simulated shared transport environment.'
        }
    },
    {
        id: 9,
        title: 'Hospital System',
        category: 'Animal Healthcare Appointment System',
        type: 'web',
        description: 'A small-scale academic project developed as a veterinary hospital appointment booking system. The platform allows pet registration, doctor schedule management, and online appointment selection in a structured workflow.',
        role: 'Fullstack Developer & UI/UX Designer',
        techStack: ['Node.js', 'Express.js', 'JavaScript', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS'],
        images: [
            '/project/hospital/Screenshot 2026-02-12 103643.png',
            '/project/hospital/Screenshot 2026-02-12 103737.png',
            '/project/hospital/Screenshot 2026-02-12 103847.png',
            '/project/hospital/Screenshot 2026-02-12 104005.png',
            '/project/hospital/Screenshot 2026-02-12 104041.png',
            '/project/hospital/Screenshot 2026-02-12 104125.png',
            '/project/hospital/Screenshot 2026-02-12 104407.png'
        ],
        keyFeatures: [
            'Pet Registration & Profile Management',
            'Doctor Schedule Management',
            'Appointment Booking by Date & Time',
            'Basic Admin Dashboard'
        ],
        problemSolution: {
            problem: 'Manual appointment scheduling and paper-based records made it difficult to manage pet information and doctor availability efficiently.',
            solution: 'Built a web-based appointment booking system that centralizes pet records and doctor schedules with structured time-slot selection.',
            impact: 'Improved scheduling clarity and reduced booking conflicts in a simulated veterinary clinic environment.'
        }
    }
];
