import {
  Bot,
  BookOpen,
  Cpu,
  Factory,
  FileText,
  GitBranch,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  Microscope,
  PackageCheck,
  Rocket,
  Settings,
  Trophy,
  Wrench,
  Zap
} from 'lucide-react';

// Lightweight image slot for gallery/cover images inside works and blog sections.
const imageSlot = (title, fileName = '', alt = '') => ({
  title,
  fileName,
  alt: alt || `${title} image`
});

export const navItems = [
  { label: 'Home', path: 'home' },
  {
    label: 'About',
    path: 'about',
    allLabel: 'Profile',
    children: [
      { label: 'Achievements', path: 'achievements' }
    ]
  },
  {
    label: 'Projects',
    path: 'works',
    allLabel: 'Project Overview',
    children: [
      { label: 'Robotics Platforms', path: 'work-robotics' },
      { label: 'Manipulators', path: 'work-manipulator' },
      { label: 'Wheeled Robots', path: 'work-wheels-robot' },
      { label: 'UAV Systems', path: 'work-uav' },
      { label: 'Precision Positioning', path: 'work-precision-positioning' },
      { label: 'Material Handling', path: 'work-material-handling' },
      { label: 'Embedded Electronics', path: 'work-electronics-design' },
      { label: 'Industrial Machinery', path: 'work-machinery' },
      { label: 'Other Projects', path: 'work-other-projects' }
    ]
  },
  {
    label: 'Research',
    path: 'publications',
    allLabel: 'Publications',
    children: [
      { label: 'Engineering Notes', path: 'blog' }
    ]
  },
  { label: 'Open Source', path: 'open-source' },
  { label: 'Contact', path: 'contact' }
];

export const openSourceSystems = [
  {
    id: 'foundry-os',
    title: 'Foundry OS',
    category: 'Product & Startup Execution OS',
    icon: GitBranch,
    description: 'An open-source operating framework for turning ideas into structured execution across product strategy, GTM, business models, team structure, and founder-level decisions.',
    themes: ['Product strategy', 'Startup execution', 'GTM thinking', 'Business model design', 'Team structure', 'Founder decisions'],
    github: 'https://github.com/Pouya-Mansournia/FoundryOS',
    documentation: 'https://github.com/Pouya-Mansournia/FoundryOS#readme'
  },
  {
    id: 'reos',
    title: 'REOS',
    category: 'Robotics Engineering Operating System',
    icon: Bot,
    description: 'A robotics engineering operating system for structuring projects from requirements to architecture, hardware, software, standards, documentation, testing, and deployment.',
    themes: ['Robotics system design', 'Agent architecture', 'Hardware/software integration', 'Robotics standards', 'OPC UA', 'Testing and deployment'],
    github: 'https://github.com/Pouya-Mansournia/REOS',
    documentation: 'https://github.com/Pouya-Mansournia/REOS#readme'
  },
  {
    id: 'archon-os',
    title: 'ARCHON OS',
    category: 'AI Agentic Architecture & Decision OS',
    icon: Layers3,
    description: 'A decision and architecture operating system for technical founders, engineers, and AI-agent workflows before code is written.',
    themes: ['AI-agent workflows', 'Software architecture', 'Technical decisions', 'System design', 'Execution loops', 'Stack selection'],
    github: 'https://github.com/Pouya-Mansournia/ARCHON',
    documentation: 'https://github.com/Pouya-Mansournia/ARCHON#readme'
  },
  {
    id: 'grabcad-library',
    title: 'GrabCAD Library',
    category: 'Open Engineering CAD Models',
    icon: Wrench,
    description: 'A public engineering model library for sharing mechanical design work, CAD references, components, and practical robotics and automation design assets.',
    themes: ['CAD models', 'Mechanical design', 'Robotics components', 'Automation hardware', 'Design references', 'Engineering sharing'],
    github: 'https://grabcad.com/pouya.mansournia-1',
    primaryLabel: 'View GrabCAD'
  }
];

// Home gallery — rich cards with description and highlight chips.
export const portfolioImages = [
  {
    title: 'Last-Mile Autonomous Delivery Robot Prototype',
    fileName: 'Last-Mile Autonomous Delivery Robot Prototype.jpg',
    alt: 'Last-mile autonomous delivery robot prototype with six-wheel mobile platform and LiDAR navigation',
    description: 'Outdoor autonomous delivery robot designed for real-world logistics applications with active suspension, LiDAR-based navigation, and modular architecture.',
    highlights: ['6-Wheel Architecture', 'Active Suspension', 'Visual SLAM + LiDAR', 'ROS-Based Integration', '20 kg Payload']
  },
  {
    title: 'Nano-Precision Motion Control Systems',
    fileName: 'Nano-Precision Motion Control Systems.png',
    alt: 'Piezo-driven nano-precision motion control system with flexure mechanism for optical positioning',
    description: 'Piezo-driven positioning system for optical and precision engineering applications using flexure mechanisms and closed-loop control.',
    highlights: ['Piezo Actuation', 'Flexure Mechanism', 'Closed-Loop Control', 'Nano-Precision Motion', 'Optical Positioning']
  },
  {
    title: 'Warehouse Automation Solutions',
    fileName: 'Warehouse Automation Solutions.png',
    alt: 'Warehouse conveyor automation system for high-throughput e-commerce fulfillment operations',
    description: 'Large-scale material handling and warehouse automation systems developed for high-throughput e-commerce fulfillment operations.',
    highlights: ['Conveyor Systems', 'Sortation', 'AGV/AMR Integration', 'PLC Architecture', 'Material Flow Design']
  },
  {
    title: 'Embedded Electronics & Control Systems',
    fileName: 'Embedded Electronics & Control Systems.png',
    alt: 'Embedded electronics control board for industrial automation and robotics applications',
    description: 'Custom hardware and firmware platforms developed for robotics, industrial automation, and sensor-based control applications.',
    highlights: ['STM32 / ESP32', 'PCB Design', 'Ethernet Communication', 'Motor Control', 'Sensor Integration']
  },
  {
    title: 'IVF Micromanipulator System',
    fileName: 'Tarfand MicroManipulator.jpg',
    alt: 'High-precision IVF micromanipulator system for ICSI and assisted reproductive technology',
    description: 'High-precision micromanipulation platform designed for ICSI and assisted reproductive technology applications.',
    highlights: ['20+ Systems Delivered', 'STM32 Real-Time Control', 'Anti-Tremor Filtering', 'Joystick-Based Motion', 'Medical Device Architecture']
  },
  {
    title: 'High-Speed Wheel Sortation System',
    fileName: 'Wheel-Sorter-D.png',
    alt: 'High-speed industrial wheel sortation system for e-commerce fulfillment centers with distributed control',
    description: 'Industrial wheel sorter developed for e-commerce fulfillment centers with real-time actuation and distributed control architecture.',
    highlights: ['High-Speed Sorting', 'Distributed Control', 'Real-Time Actuation', 'Parcel Handling', 'Warehouse Automation']
  }
];

export const profileImage = imageSlot(
  'Portfolio Home Portrait',
  'Portfolio Pic Home.JPG',
  'Pouya Mansournia portfolio home image'
);
export const aboutImage = imageSlot('Profile Photo', 'Profile Photo.jpg', 'Pouya Mansournia profile photo');

export const resumeFile = {
  label: 'Download Resume',
  fileName: 'Pouya Mansournia CV.pdf',
  href: '/resume/Pouya%20Mansournia%20CV.pdf'
};

export const stats = [
  ['12+', 'Years Experience'],
  ['20+', 'Robotic Platforms'],
  ['500+', 'Industrial Machines'],
  ['RoboCup', 'World Champion']
];

export const resumeHighlights = [
  { value: 'Robotics', label: 'Autonomous robots, AGV/AMR platforms and delivery systems' },
  { value: 'Automation', label: 'Sorter, conveyor, P2L and fulfillment systems at scale' },
  { value: 'Precision', label: 'Piezo actuation, flexure mechanisms and nano-positioning' }
];

export const expertiseAreas = [
  {
    icon: Bot,
    title: 'Robotics Systems',
    text: 'Mobile robots, mechanisms, drivetrain design and practical platform integration.'
  },
  {
    icon: Factory,
    title: 'Warehouse Automation',
    text: 'Material handling systems, sorters, conveyors and deployment-ready engineering.'
  },
  {
    icon: Microscope,
    title: 'Precision Motion',
    text: 'Flexure-based structures, piezo actuation and high-resolution positioning concepts.'
  },
  {
    icon: Cpu,
    title: 'Mechatronics',
    text: 'Embedded electronics, sensors, control logic and hardware-software integration.'
  }
];

export const blogPosts = [
  {
    id: 'blog-sorter',
    title: 'High-Speed Wheel Sortation System',
    icon: PackageCheck,
    cover: imageSlot('Wheel Sorter 3D CAD Model', 'Wheel-Sorter-D.png', 'Wheel sorter 3D CAD model for e-commerce fulfillment'),
    images: [
      imageSlot('Wheel Sorter 3D CAD Model', 'Wheel Sorter 3D CAD Model.png', 'Wheel sorter 3D CAD model for e-commerce fulfillment'),
      imageSlot('Real-Time Warehouse Automation System', 'Real-Time Warehouse Automation System.JPG', 'Real-time warehouse automation system deployment'),
      imageSlot('DC Motor Control Board Design', 'DC Motor Control Board Design.png', 'DC motor control board for wheel sorter actuation'),
      imageSlot('Warehouse Layout & Material Flow Design', 'Warehouse Layout & Material Flow Design.png', 'Warehouse layout and material flow design for fulfillment')
    ],
    text: 'Industrial sorting platform developed for e-commerce fulfillment centers to improve parcel routing speed, reliability, and operational throughput.',
    highlights: ['20+ Units Built & Installed', 'Operational in Production', 'Real-Time Sorting', 'Distributed Control', 'DC Motor Actuation', 'PLC Integration'],
    role: 'Mechanical Design, Automation Architecture, System Integration',
    technologies: 'PLC, DC Motors, Sensors, Conveyor Systems, Material Handling',
    impact: 'Built, installed, and operationalized 20+ Wheel Sorter machines that are currently in active production use.',
    detail: [
      'Wheel sorter design integrates mechanical architecture, distributed control systems, and real-time actuation to achieve high-throughput parcel sorting at industrial scale.',
      'System architecture spans layout optimization, drive module placement, sensor integration, PLC programming, and deployment validation across fulfillment environments.',
      'More than 20 Wheel Sorter units have been manufactured, installed, commissioned, and are actively operating in real warehouse and fulfillment environments.'
    ]
  },
  {
    id: 'blog-put-to-light',
    title: 'Put-to-Light & Pick-to-Light Warehouse System',
    icon: Zap,
    cover: imageSlot('Put / Pick To Light', 'PutPick to Light.png', 'Put-to-light and pick-to-light warehouse guidance system'),
    images: [
      imageSlot('Pick-to-Light System', 'Pick-to-Light System.jpg', 'Pick-to-light operator guidance station'),
      imageSlot('Integrated Put/Pick-to-Light Solution', 'Integrated PutPick-to-Light Solution.jpg', 'Integrated put and pick-to-light warehouse solution')
    ],
    text: 'Human-centered warehouse guidance system designed to improve picking accuracy, reduce operator errors, and accelerate fulfillment workflows.',
    highlights: ['4000 Units Produced', 'Installed at DigiKala', 'Visual Guidance', 'Operator Assistance', 'Picking Accuracy', 'Fulfillment Optimization'],
    role: 'System Design, Workflow Design, Automation Integration',
    technologies: 'LED Modules, Embedded Controllers, Warehouse Software, Sensors',
    impact: 'Produced and installed 4000 Put-to-Light units for DigiKala warehouse operations.',
    detail: [
      'Put-to-light and pick-to-light systems bridge hardware and software: LED station addressing, operator feedback loops, event-driven actuation, and process monitoring.',
      'System design focuses on station layout, device addressing, operator interaction patterns, diagnostics, and measurable process performance outcomes.',
      'A total of 4000 Put-to-Light units were produced, installed, and deployed inside DigiKala fulfillment operations.'
    ]
  },
  {
    id: 'blog-dimension-detection',
    title: 'Dimension Weight Scanning and Point Cloud Detection',
    icon: Gauge,
    cover: imageSlot('Dimension Detection', 'Dimension Detection System V2.png', 'Dimension weight scanning and point cloud detection system'),
    images: [
      imageSlot('3D Point Cloud Reconstruction', '3D Point Cloud Reconstruction.JPG', '3D point cloud reconstruction of packages for logistics measurement'),
      imageSlot('Interactive 3D Point Cloud Visualization', 'Interactive 3D Point Cloud Visualization.png', 'Interactive 3D point cloud visualization for package dimensioning')
    ],
    text: '3D vision and measurement system designed for package dimensioning, object detection, and logistics data capture.',
    highlights: ['Point Cloud Processing', '3D Visualization', 'Dimension Detection', 'Package Measurement', 'Logistics Automation'],
    role: 'System Concept, Mechanical Integration, Sensor Architecture',
    technologies: 'Depth Camera, Point Cloud, Computer Vision, Measurement Algorithms',
    impact: 'Enabled structured package data for logistics and automation decisions in fulfillment pipelines.',
    detail: [
      'Dimension detection combines structured sensor placement, depth imaging, point cloud filtering, and calibration to produce reliable real-time package measurements.',
      'The workflow connects raw measurement data with automation decisions, conveyor routing logic, and logistics management software.'
    ]
  },
  {
    id: 'blog-iot',
    title: 'Industrial IoT Monitoring Platform',
    icon: Cpu,
    cover: imageSlot('IoT', 'AcustOne.PNG', 'Industrial IoT monitoring platform for automation and data collection'),
    images: [
      imageSlot('Smart Scale', 'Smart Scale.jpg', 'IoT-connected smart scale for industrial measurement'),
      imageSlot('Sensor Design', 'Sensor Design.png', 'Custom sensor design for industrial monitoring'),
      imageSlot('ESP32-Based Smart Sensor Node', 'ESP32-Based Smart Sensor Node.png', 'ESP32-based smart sensor node for edge data collection'),
      imageSlot('Ethernet-Based Industrial Controller', 'Ethernet-Based Industrial Controller.png', 'Ethernet-based industrial controller for distributed automation')
    ],
    text: 'Connected sensor and controller platforms developed for monitoring, automation, and industrial data collection.',
    highlights: ['ESP32 Edge Device', 'Ethernet Controller', 'Sensor Integration', 'Remote Monitoring', 'Industrial Communication'],
    role: 'Embedded System Design, Hardware Integration, Firmware Logic',
    technologies: 'ESP32, Ethernet, MQTT, Sensors, PCB Design',
    impact: 'Created reliable connected devices for industrial monitoring and control across distributed environments.',
    detail: [
      'Industrial IoT infrastructure links edge devices, sensor nodes, communication protocols, and monitoring dashboards into actionable field data pipelines.',
      'Devices handle sensor acquisition, alarm logic, status reporting, and remote diagnostics across distributed automation environments.'
    ]
  }
];

export const works = [
  {
    id: 'work-robotics',
    title: 'Robotics Platforms',
    icon: Bot,
    cover: imageSlot('MRL Middle-Size Rescue Robot Platform', 'AtisBot MRL@WORK Competition Robot.png', 'MRL@WORK competition robot platform — robotics portfolio'),
    images: [
      imageSlot('Last-Mile Autonomous Delivery Robot Prototype', 'Last-Mile Autonomous Delivery Robot Prototype.jpg', 'Last-mile autonomous delivery robot with six-wheel platform'),
      imageSlot('Autonomous Mobile Robot (AMR) Platform', 'Autonomous Mobile Robot (AMR) Platform.jpg', 'Autonomous mobile robot AMR platform for industrial applications'),
      imageSlot('Compact Search & Rescue Robot', 'Compact Search & Rescue Robot.png', 'Compact search and rescue robot for RoboCup rescue'),
      imageSlot('Delivery Robot', 'Delivery Robot.jpg', 'Outdoor delivery robot prototype with autonomous navigation'),
      imageSlot('Educational Mecanum Drive Robot', 'Educational Mecanum Drive Robot.png', 'Educational mecanum drive robot for robotics learning'),
      imageSlot('AtisBot MRL@WORK Competition Robot', 'AtisBot MRL@WORK Competition Robot.png', 'AtisBot MRL@WORK competition robot platform'),
      imageSlot('Mini Rover Mobile Robot', 'Mini Rover Mobile Robot.png', 'Mini rover mobile robot prototype'),
      imageSlot('MRL MiddleSize Robot', 'MRL MiddleSize Robot.png', 'MRL middle-size soccer robot platform'),
      imageSlot('MRL UAV Robot Platform', 'MRL UAV Robot Platform.png', 'MRL UAV robot platform for aerial rescue'),
      imageSlot('MRL@WORK Robot', 'MRL@WORK Robot.jpg', 'MRL@WORK robot for industrial task completion'),
      imageSlot('Passive Gripper for MRL@WORK Robot', 'Passive Gripper for MRL@WORK Robot.png', 'Passive gripper end-effector for MRL@WORK robot'),
      imageSlot('Shelf Scanner Robot', 'Shelf Scanner Robot.jpg', 'Autonomous shelf scanner robot for warehouse inventory'),
      imageSlot('Tracked Search & Rescue Robot', 'Tracked Search & Rescue Robot.png', 'Tracked search and rescue robot for RoboCup rescue competition'),
      imageSlot('Wheel Robots', 'Wheel Robots.png', 'Wheeled mobile robot platforms collection'),
      imageSlot('Four-Wheel Poultry Service Robot ISo', 'Four-Wheel Poultry Service Robot ISo.JPG', 'Four-wheel poultry service robot isometric view'),
      imageSlot('Four-Wheel Poultry Service Robot', 'Four-Wheel Poultry Service Robot.JPG', 'Four-wheel poultry service robot for agricultural automation')
    ],
    tags: ['Mobile Robotics', 'Rescue Robotics', 'Autonomous Platforms', 'RoboCup'],
    text: 'Mobile robots, rescue robots, and competition platforms developed across research, RoboCup, and applied robotics environments.',
    highlights: ['Mobile Robotics', 'Rescue Robotics', 'Autonomous Platforms', 'Mechanical Architecture', 'RoboCup Systems'],
    role: 'Mechanical Design, Team Leadership, System Architecture',
    technologies: 'LiDAR, IMU, ROS, DC Motors, Sensors, CAD',
    impact: 'Built multiple field-tested robotic platforms for research, competition, and applied industrial use.',
    detail: [
      'Robotics platforms span custom chassis design, modular drivetrain systems, sensor integration, and field-oriented testing for competition and real-world deployment.',
      'The portfolio covers autonomous mobile robots, rescue robots, delivery prototypes, and research platforms with mechanical and systems-level engineering depth.'
    ]
  },
  {
    id: 'work-manipulator',
    title: 'Robotic Manipulators and End-Effectors',
    icon: Layers3,
    cover: imageSlot('Manipulator', 'Manipulator.png', 'Robotic manipulator arm and end-effector system'),
    images: [
      imageSlot('Passive Gripper for MRL@WORK Robot', 'Passive Gripper for MRL@WORK Robot.png', 'Passive gripper for MRL@WORK competition robot'),
      imageSlot('3D CAD Model of Educational Manipulator', '3D CAD Model of Educational Manipulator.png', '3D CAD model of educational robotic manipulator'),
      imageSlot('Six-DOF Search & Rescue Manipulator', 'Six-DOF Search & Rescue Manipulator.png', 'Six-DOF search and rescue robotic manipulator arm'),
      imageSlot('High-Torque Manipulator with Dynamixel PRO Actuators', 'High-Torque Manipulator with Dynamixel PRO Actuators.png', 'High-torque robotic manipulator with Dynamixel PRO servo actuators'),
      imageSlot('Passive Finger Gripper Mechanism', 'Passive Finger Gripper Mechanism.png', 'Passive finger gripper mechanism for robotic manipulation')
    ],
    tags: ['6-DOF Manipulation', 'Passive Grippers', 'Dynamixel PRO', 'End-Effectors'],
    text: 'Manipulator systems developed for educational, rescue, and competition robotics applications with modular actuation and gripper mechanisms.',
    highlights: ['6-DOF Manipulation', 'Passive Grippers', 'Dynamixel PRO Actuators', 'End-Effector Design', 'Educational Robotics'],
    role: 'Mechanical Design, Actuation Design, Integration',
    technologies: 'Dynamixel PRO, CAD, Servo Control, Linkage Design, Grippers',
    impact: 'Delivered modular manipulator platforms for robotics education and competition task execution.',
    detail: [
      'Manipulator design integrates mechanism geometry, actuator selection, payload analysis, and gripping strategy for competition and applied robotics tasks.',
      'Systems include 6-DOF arms, passive grippers, and educational manipulators built around Dynamixel PRO actuators with CAD-driven design iteration.'
    ]
  },
  {
    id: 'work-wheels-robot',
    title: 'Wheeled Mobile Robot Platforms',
    icon: Settings,
    cover: imageSlot('Wheel Robots', 'Wheel Robots.png', 'Wheeled mobile robot platforms collection'),
    images: [
      imageSlot('Delivery Robot', 'Delivery Robot.jpg', 'Wheeled delivery robot prototype with autonomous navigation'),
      imageSlot('AMRbot', 'AMRbot.png', 'AMR autonomous mobile robot platform'),
      imageSlot('Shelf Scanner Robot', 'Shelf Scanner Robot.jpg', 'Wheeled shelf scanner robot for inventory applications'),
      imageSlot('MRL@WORK Robot', 'MRL@WORK Robot.jpg', 'MRL@WORK wheeled competition robot'),
      imageSlot('MRL UAV Robot Platform', 'MRL UAV Robot Platform.png', 'MRL UAV and ground robot platform'),
      imageSlot('Four-Wheel Poultry Service Robot', 'Four-Wheel Poultry Service Robot ISo.JPG', 'Four-wheel poultry service robot isometric'),
      imageSlot('Educational Mecanum Drive Robot', 'Educational Mecanum Drive Robot.png', 'Educational mecanum drive wheeled robot'),
      imageSlot('Ball Handling and Spinback Mechanism', 'Ball Handling and Spinback Mechanism.png', 'Ball handling and spinback mechanism for soccer robots')
    ],
    tags: ['Mecanum Drive', 'Mobile Robotics', 'Competition Robotics', 'Drivetrain Design'],
    text: 'Wheeled and mecanum-drive robot platforms developed for mobility research, control experiments, and RoboCup applications.',
    highlights: ['Mecanum Drive', 'Self-Balancing Platform', 'Ball Handling Mechanism', 'Mobile Robot Control', 'Competition Robotics'],
    role: 'Mechanical Design, Drivetrain Design, Prototype Development',
    technologies: 'DC Motors, Encoders, Mecanum Wheels, CAD, Embedded Control',
    impact: 'Enabled rapid experimentation with mobile robot locomotion and competition mechanisms.',
    detail: [
      'Wheeled platform design prioritizes chassis stiffness, drive module reliability, traction control, and electronics packaging for both competition and field use.',
      'Projects include mecanum-drive robots, self-balancing platforms, and competition robots with custom ball-handling and spinback mechanisms.'
    ]
  },
  {
    id: 'work-uav',
    title: 'UAV',
    icon: Rocket,
    cover: imageSlot('RoboCup Rescue UAV Platforms', 'RoboCup Rescue UAV Platforms.png', 'RoboCup rescue UAV aerial platforms'),
    images: [
      imageSlot('QuadCopter-V1', 'QuadCopter-V1.png', 'Quadcopter UAV version 1 prototype'),
      imageSlot('QuadCopter-V2', 'QuadCopter-V2.png', 'Quadcopter UAV version 2 with improved structure'),
      imageSlot('QuadCopter-V3', 'QuadCopter-V3.png', 'Quadcopter UAV version 3 lightweight design')
    ],
    tags: ['Aerial Platform', 'Lightweight Design', 'Rescue Robotics', 'Quadcopter'],
    text: 'Lightweight aerial robot platforms developed for RoboCup rescue robotics with iterated structural and packaging design.',
    highlights: ['Aerial Platform', 'Lightweight Design', 'Quadcopter Iterations', 'Structural Optimization', 'Rescue Robotics'],
    role: 'Mechanical Design, Structural Design, Prototype Development',
    technologies: 'Carbon Fiber, Motors, CAD, Flight Controllers, Vibration Analysis',
    impact: 'Delivered lightweight aerial platforms for RoboCup rescue robotics applications across multiple design iterations.',
    detail: [
      'UAV work documents lightweight structure, packaging optimization, vibration isolation, assembly access, and flight-oriented mechanical constraints.',
      'Three quadcopter design iterations refined frame geometry, motor placement, electronics integration, and weight distribution for competition performance.'
    ]
  },
  {
    id: 'work-precision-positioning',
    title: 'Piezo-Driven Fast Steering Mirror Actuator',
    icon: Microscope,
    cover: imageSlot('Piezo-Driven Fast Steering Mirror Actuator', 'Piezo-Driven Fast Steering Mirror Actuator.png', 'Piezo-driven fast steering mirror precision actuator for optical positioning'),
    images: [
      imageSlot('Tarfand MicroManipulator', 'Tarfand MicroManipulator.jpg', 'Tarfand IVF micromanipulator for medical precision applications'),
      imageSlot('Joystick', 'Joystick.png', 'Custom joystick controller for micromanipulator input'),
      imageSlot('Flexure Mechanism', 'Flexure Mechanism.jpg', 'Flexure mechanism for precision motion and nano-positioning'),
      imageSlot('Linear Positioning', 'Linear Positioning.png', 'Linear precision positioning stage'),
      imageSlot('Magnet Sensor', 'Magnet Sensor.png', 'Magnetic sensor for precision position feedback'),
      imageSlot('Magnetic Encoder', 'Magnetic Encoder.png', 'Magnetic encoder for precision motion control'),
      imageSlot('Micro Manipulator', 'Micro Manipulator.png', 'Micro manipulator precision mechanism'),
      imageSlot('Precision Actuator', 'Precision Actuator.jpg', 'Precision actuator for nano-positioning systems')
    ],
    tags: ['Piezo Actuation', 'Flexure Mechanism', 'Nano-Positioning', 'Closed-Loop Control'],
    text: 'Nano-precision motion platform designed for optical positioning using flexure structures, piezoelectric actuation, and closed-loop control.',
    highlights: ['Piezo Actuation', 'Flexure Mechanism', 'Fast Steering Mirror', 'Closed-Loop Control', 'Microradian Resolution'],
    role: 'Mechanical Design, Precision Mechanism Design, Control Integration',
    technologies: 'Piezo Actuators, Flexures, Strain Gauges, STM32, Control Electronics',
    impact: 'Developed a high-resolution positioning platform for optical and precision engineering applications.',
    detail: [
      'The fast steering mirror actuator uses flexure-based parallel kinematics to achieve microradian-level angular resolution with high bandwidth and minimal friction.',
      'System design integrates piezo actuator selection, flexure stiffness modeling, strain gauge sensing, and STM32-based closed-loop control firmware.'
    ]
  },
  {
    id: 'work-material-handling',
    title: 'Industrial Conveyor and Material Handling Systems',
    icon: Factory,
    cover: imageSlot('Industrial Conveyor System Design', 'Industrial Conveyor System Design.png', 'Industrial conveyor system design for warehouse material handling'),
    images: [
      imageSlot('60W Brushless Motor', '60W Brushless Motor.png', '60W brushless motor for conveyor drive systems'),
      imageSlot('Wheel Sorter Roller', 'Wheel Sorter Roller.png', 'Wheel sorter roller module for parcel sortation'),
      imageSlot('Active Roller', 'Active Roller.png', 'Active roller conveyor module for material handling'),
      imageSlot('Return Center Automation Workflow', 'Return Center Automation Workflow.png', 'Return center automation workflow for e-commerce logistics'),
      imageSlot('Electric Stopper', 'Electric Stopper.png', 'Electric stopper for conveyor flow control')
    ],
    tags: ['Conveyor Design', 'Material Flow', 'Roller Systems', 'Sortation'],
    text: 'Custom conveyor and material handling systems designed for warehouse, logistics, and industrial production environments.',
    highlights: ['Conveyor Design', 'Material Flow', 'Roller Systems', 'Industrial Automation', 'Mechanical Integration'],
    role: 'Mechanical Design, Layout Design, Manufacturing Support',
    technologies: 'Rollers, Motors, Gearboxes, Sensors, PLC',
    impact: 'Supported scalable movement of goods in industrial and fulfillment operations at production scale.',
    detail: [
      'Material handling systems are shaped by throughput targets, safety requirements, maintenance access, and installation constraints at industrial scale.',
      'The work spans roller conveyor design, sorter integration, flow analysis, motor and gearbox selection, and PLC-based automation.'
    ]
  },
  {
    id: 'work-electronics-design',
    title: 'Embedded Electronics and PCB Design',
    icon: Cpu,
    cover: imageSlot('High-Frequency Four-Layer PCB Design', 'High-Frequency Four-Layer PCB Design.png', 'High-frequency four-layer PCB design for industrial automation'),
    images: [
      imageSlot('Stepper Motor Driver', 'Stepper Motor Driver.png', 'Custom stepper motor driver PCB for precision motion'),
      imageSlot('PowerManagment_V2', 'PowerManagment_V2.png', 'Power management board version 2 for embedded systems'),
      imageSlot('Multifunctional', 'Multifunctional.png', 'Multifunctional embedded control board for robotics'),
      imageSlot('Piezo Controller', 'Piezo Controller.png', 'Piezo actuator controller PCB for precision positioning')
    ],
    tags: ['PCB Design', 'Motor Control', 'Sensor Interfaces', 'Embedded Firmware'],
    text: 'Custom electronics developed for robotics, monitoring, motor control, and industrial automation systems.',
    highlights: ['PCB Design', 'Motor Control', 'Sensor Interfaces', 'Ethernet Communication', 'Embedded Firmware'],
    role: 'Electronics Architecture, PCB Design Support, Firmware Logic',
    technologies: 'STM32, ESP32, Ethernet, CAN, Sensors, Motor Drivers',
    impact: 'Built reliable control electronics for robotics and automation platforms in production environments.',
    detail: [
      'PCB design work covers schematic capture, component selection, layout optimization, and firmware integration for embedded and industrial applications.',
      'Control boards include stepper and brushless motor drivers, piezo controllers, power management modules, and multi-function embedded platforms.'
    ]
  },
  {
    id: 'work-machinery',
    title: 'Industrial Machinery and Manufacturing Systems',
    icon: Wrench,
    cover: imageSlot('3D CAD Model of Mobile Kitchen Trailer', '3D CAD Model of Mobile Kitchen Trailer.jpg', '3D CAD model of mobile kitchen trailer — industrial machinery design'),
    images: [
      imageSlot('Mobile Kitchen Trailer', 'Mobile Kitchen Trailer.jpg', 'Mobile kitchen trailer for field operations'),
      imageSlot('Backery Production', 'Backery Production.jpg', 'Automated bakery production line for food processing'),
      imageSlot('Mobile Kitchen 3d', 'Mobile Kitchen 3d.png', 'Mobile kitchen 3D model for field deployment'),
      imageSlot('Automated Lavash Bread Production System', 'Automated Lavash Bread Production System.png', 'Automated lavash bread production system for food manufacturing'),
      imageSlot('Lavash Bakery Testing & Validation', 'Lavash Bakery Testing & Validation.jpg', 'Lavash bakery machine testing and validation')
    ],
    tags: ['Machine Design', 'Food Processing Automation', 'Manufacturing', 'Mechanical Validation'],
    text: 'Large-scale mechanical systems developed for food production, field kitchens, and manufacturing applications.',
    highlights: ['Machine Design', 'Manufacturing', 'Food Processing Automation', 'Mechanical Validation', 'Production Support'],
    role: 'Mechanical Design, Manufacturing Engineering, System Validation',
    technologies: 'SolidWorks, Gear Systems, Motors, Mechanisms, Sheet Metal',
    impact: 'Delivered production-ready machinery and field equipment validated for real-world industrial use.',
    detail: [
      'Machinery design combines mechanism analysis, fabrication constraints, material selection, and production validation for real-world operational environments.',
      'Projects include mobile kitchen trailers, automated bread production systems, and field equipment validated through manufacturing and field testing.'
    ]
  },
  {
    id: 'work-other-projects',
    title: 'Other Projects',
    icon: Settings,
    cover: imageSlot('Brushless Motor Design & Manufacturing', 'Brushless Motor Design & Manufacturing.jpg', 'Brushless motor design and manufacturing for robotics'),
    images: [
      imageSlot('Brushless Motor', 'Brushless Motor.png', 'Custom brushless motor design for robotics applications'),
      imageSlot('Gear', 'Gear.jpg', 'Precision gear design for drivetrain systems'),
      imageSlot('150W Gearbox', '150W Gearbox.png', '150W gearbox for robotic drivetrain applications'),
      imageSlot('Drum Motor', 'Drum Motor.png', 'Drum motor for conveyor and material handling systems'),
      imageSlot('200W Gearbox', '200W Gearbox.png', '200W gearbox for high-torque robotic applications'),
      imageSlot('Brushless Motor Wiring', 'Brushless Motor Wiring.jpg', 'Brushless motor wiring and assembly'),
      imageSlot('Planatery Gear', 'Planatery Gear.png', 'Planetary gear system for compact drivetrain design')
    ],
    tags: ['Brushless Motors', 'Gearbox Design', 'Drivetrain Components', 'Prototyping'],
    text: 'Additional engineering projects including mechanisms, components, prototypes and mechanical subsystems.',
    highlights: ['Brushless Motors', 'Gearbox Design', 'Drivetrain Components', 'Prototyping', 'Mechanism Design'],
    role: 'Mechanical Design, Component Engineering, Prototype Development',
    technologies: 'SolidWorks, DC Motors, Gearboxes, Manufacturing, CAD',
    impact: 'Developed supporting drivetrain and mechanical components for robotics and automation systems.',
    detail: [
      'This section collects supporting mechanisms, components, drivetrain experiments and smaller engineering builds.',
      'The projects show practical design work across motor systems, gears, fixtures and prototype subsystems.'
    ]
  }
];

export const achievements = [
  {
    icon: Trophy,
    title: 'Robotics & Automation Ownership',
    text: 'Led multidisciplinary robotics and warehouse automation work across mechanical design, embedded systems, PLCs and operations.'
  },
  {
    icon: Factory,
    title: 'Production-scale Engineering',
    text: 'Worked on systems connected to large-scale fulfillment environments, high throughput operations and real-world deployment constraints.'
  },
  {
    icon: Microscope,
    title: 'Precision Motion Research',
    text: 'Developed experience in piezo-actuated mechanisms, flexure-based structures and nano-precision positioning concepts.'
  },
  {
    icon: Bot,
    title: 'Broad Robotics Portfolio',
    text: 'Built and documented experience across AGVs, delivery robots, robotic sorters, manipulators, conveyors and custom machines.'
  }
];

export const publications = [
  {
    icon: BookOpen,
    title: 'Advanced Mobile Robotics Book',
    venue: 'Online robotics book',
    year: '2026',
    href: 'https://pouya-mansournia.github.io/advanced-mobile-robotics-book/',
    text: 'Open online book covering advanced mobile robotics topics, made available as a dedicated GitHub Pages publication.',
    highlights: ['Mobile Robotics', 'Online Book', 'Robotics Education', 'GitHub Pages']
  },
  {
    icon: BookOpen,
    title: 'Distributed Active Sensing for Autonomous Indoor Acoustic Optimization Using Reverberation-Time Estimation and Adaptive Treatment Recommendation',
    venue: 'Peer-reviewed journal manuscript',
    year: 'Under Review 2026',
    text: 'Under-review manuscript on distributed active sensing, reverberation-time estimation and adaptive acoustic treatment recommendation for autonomous indoor acoustic optimization.',
    highlights: ['Under Review', '2026', 'Acoustic Optimization', 'Distributed Sensing']
  },
  {
    icon: BookOpen,
    title: 'Design, Embedded Closed-Loop Control, and Interferometric Validation of a Piezo-Driven Flexure-Based Fast Steering Mirror',
    venue: 'Peer-reviewed journal manuscript',
    year: 'Under Review 2026',
    text: 'Under-review manuscript on piezo-driven flexure-based fast steering mirror design, embedded closed-loop control and interferometric validation for precision optical positioning.',
    highlights: ['Under Review', '2026', 'Piezo Actuation', 'Interferometric Validation']
  },
  {
    icon: BookOpen,
    title: 'Localization and Navigation Omni-directional Robots based on Sensors Fusion and Particle Filter',
    venue: 'The 9th Joint Conference on Artificial Intelligence & Robotics and the 2nd RoboCup Asia-Pacific International Symposium',
    year: 'Nov 30, 2018',
    href: 'https://ieeexplore.ieee.org/document/8769756',
    text: 'Conference publication focused on localization and navigation for omni-directional robots using sensor fusion and particle filter methods.',
    highlights: ['Omni-directional Robots', 'Sensor Fusion', 'Particle Filter', 'Localization']
  },
  {
    icon: FileText,
    title: 'MRL@WORK 2018 Team Description Paper',
    venue: 'The International Symposium of RoboCup, Montreal, Canada',
    year: '2018',
    href: 'https://tdp.robocup.org/tdp_team/mrlwork/',
    text: 'Team description paper documenting the MRL@WORK robotics platform, system architecture, competition strategy and applied robot capabilities.',
    highlights: ['RoboCup', 'MRL@WORK', 'Team Description Paper', 'Robotics Platform']
  },
  {
    icon: FileText,
    title: 'MRL Team Description Papers of Rescue Robots',
    venue: 'The International Symposium of RoboCup, Hefei, China',
    year: 'Nov 30, 2014',
    text: 'Team description paper covering MRL rescue robot systems, mechanical design, platform development and competition-oriented robotics work.',
    highlights: ['Rescue Robots', 'RoboCup', 'Mobile Robotics', 'Team Description Paper']
  }
];

export const contacts = [
  { icon: Mail, label: 'Email', value: 'p.mansournia@gmail.com', href: 'mailto:p.mansournia@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Istanbul, Turkiye', href: 'https://www.google.com/maps/search/?api=1&query=Istanbul%2C%20Turkiye' }
];

export const professionalLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pouya-mansournia/', initials: 'in' },
  { label: 'ADPList', href: 'https://adplist.org/mentors/pmansourniagmailcom-mr7v8q8t', initials: 'ADP' },
  { label: 'GitHub', href: 'https://github.com/Pouya-Mansournia', initials: 'GH' },
  { label: 'GrabCAD', href: 'https://grabcad.com/pouya.mansournia-1', initials: 'GC' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Pouya-Mansournia', initials: 'RG' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Pouyamansournia', initials: 'YT' }
];
