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
    allLabel: 'My Story',
    children: [
      { label: 'Product Journey', path: 'product-journey' },
      { label: 'Achievements', path: 'achievements' }
    ]
  },
  { label: 'Systems', path: 'systems' },
  {
    label: 'Work',
    path: 'works',
    allLabel: 'Work Overview',
    children: [
      { label: 'Warehouse Digital Twin', path: 'case-warehouse-digital-twin' },
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
  { label: 'Writing', path: 'writing' },
  { label: 'Open Source', path: 'open-source' },
  { label: 'Contact', path: 'contact' }
];

export const openSourceSystems = [
  {
    id: 'flexsim-digital-twin',
    title: 'FlexSim Digital Twin',
    category: 'Warehouse Digital Twin & Robot Orchestration',
    group: 'Robotics Systems',
    icon: Layers3,
    description: 'A working digital-twin integration that bridges a FlexSim warehouse model with a real-time orchestration layer and a robot fleet: FlexSim validates decisions, the orchestration layer makes them, and ROS 2 executes robot-level behavior.',
    themes: ['Digital Twin', 'FlexSim', 'Robot Orchestration', 'FastAPI', 'ROS 2', 'Warehouse Automation'],
    github: 'https://github.com/Pouya-Mansournia/flexsim-digital-twin',
    documentation: 'https://github.com/Pouya-Mansournia/flexsim-digital-twin#readme'
  },
  {
    id: 'foundry-os',
    title: 'FoundryOS',
    category: 'Product & Startup Execution OS',
    group: 'Engineering Intelligence',
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
    group: 'Engineering Intelligence',
    icon: Bot,
    description: 'A robotics engineering operating system for structuring projects from requirements to architecture, hardware, software, standards, documentation, testing, and deployment.',
    themes: ['Robotics system design', 'Agent architecture', 'Hardware/software integration', 'Robotics standards', 'OPC UA', 'Testing and deployment'],
    github: 'https://github.com/Pouya-Mansournia/REOS',
    documentation: 'https://github.com/Pouya-Mansournia/REOS#readme'
  },
  {
    id: 'archon-os',
    title: 'ARCHON',
    category: 'AI Agentic Architecture & Decision OS',
    group: 'Engineering Intelligence',
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
    group: 'Embedded & Mechatronics',
    icon: Wrench,
    description: 'A public engineering model library for sharing mechanical design work, CAD references, components, and practical robotics and automation design assets.',
    themes: ['CAD models', 'Mechanical design', 'Robotics components', 'Automation hardware', 'Design references', 'Engineering sharing'],
    github: 'https://grabcad.com/pouya.mansournia-1',
    primaryLabel: 'View GrabCAD'
  },
  {
    id: 'warehouse-amr-ros2',
    title: 'Warehouse AMR ROS2',
    category: 'Autonomous Mobile Robot Stack',
    group: 'Robotics Systems',
    icon: Bot,
    description: 'An open-source ROS 2 stack for a warehouse autonomous mobile robot, covering navigation, mapping and task execution for warehouse automation scenarios.',
    themes: ['ROS 2', 'AMR Navigation', 'Warehouse Automation', 'Mapping & Localization', 'Task Execution', 'Fleet Robotics'],
    github: 'https://github.com/Pouya-Mansournia/warehouse-amr-ros2',
    documentation: 'https://github.com/Pouya-Mansournia/warehouse-amr-ros2#readme'
  },
  {
    id: 'ros2-zero-to-robot',
    title: 'ROS 2: Zero to Robot',
    category: 'Open Robotics Education',
    group: 'Robotics Education',
    icon: BookOpen,
    description: 'An open-source ROS 2 educational resource that takes readers from ROS 2 fundamentals to building a working robot, step by step.',
    themes: ['ROS 2', 'Robotics Education', 'Beginner to Robot', 'Open Source Curriculum'],
    github: 'https://github.com/Pouya-Mansournia/ros2-zero-to-robot',
    documentation: 'https://pouya-mansournia.github.io/ros2-zero-to-robot/'
  },
  {
    id: 'delivery-robot-ros',
    title: 'Delivery Robot ROS',
    category: 'Autonomous Delivery Robot Stack',
    group: 'Robotics Systems',
    icon: Bot,
    description: 'An open-source ROS-based stack for an autonomous delivery robot, covering navigation, perception, and task execution for last-mile delivery scenarios.',
    themes: ['ROS', 'Delivery Robotics', 'Autonomous Navigation', 'Mobile Robots'],
    github: 'https://github.com/Pouya-Mansournia/Delivery-Robot-ROS',
    documentation: 'https://github.com/Pouya-Mansournia/Delivery-Robot-ROS#readme'
  }
];

// Home gallery: rich cards with description and highlight chips.
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
    cover: imageSlot('MRL Middle-Size Rescue Robot Platform', 'AtisBot MRL@WORK Competition Robot.png', 'MRL@WORK competition robot platform: robotics portfolio'),
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
    cover: imageSlot('3D CAD Model of Mobile Kitchen Trailer', '3D CAD Model of Mobile Kitchen Trailer.jpg', '3D CAD model of mobile kitchen trailer: industrial machinery design'),
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
    title: 'ROS 2: Zero to Robot',
    venue: 'Online robotics book',
    year: '2026',
    href: 'https://pouya-mansournia.github.io/ros2-zero-to-robot/',
    text: 'Open online book taking readers from ROS 2 fundamentals to building a working robot, published as a dedicated GitHub Pages resource.',
    highlights: ['ROS 2', 'Online Book', 'Robotics Education', 'GitHub Pages']
  },
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
    title: 'Design, Modeling, and Experimental Validation of a Piezo-Driven Fast Steering Mirror with a Hybrid Circular–Elliptical Flexure Hinge',
    venue: 'Submitted to Sensors and Actuators Reports (Elsevier)',
    year: 'Submitted 2026',
    text: 'Submitted manuscript on the design, modeling and experimental validation of a piezo-driven fast steering mirror using a hybrid circular–elliptical flexure hinge.',
    highlights: ['Submitted', '2026', 'Piezo Actuation', 'Flexure Hinge']
  },
  {
    icon: BookOpen,
    title: 'Privacy-Preserving Long-Term Acoustic Exposure Dynamics in an Occupied Multi-Floor Office Building Using Distributed dB-Only IoT Monitoring',
    venue: 'Submitted to Internet of Things (Elsevier)',
    year: 'Submitted 2026',
    href: 'https://github.com/Pouya-Mansournia/acoustic-exposure-dynamics-dataset',
    text: 'Submitted manuscript on privacy-preserving long-term acoustic exposure dynamics in an occupied multi-floor office building using distributed dB-only IoT monitoring.',
    highlights: ['Submitted', '2026', 'Acoustic Monitoring', 'IoT']
  },
  {
    icon: BookOpen,
    title: 'Cost of Intelligence in Multi-Robot Failover: A Paired-Seed Comparison of Deterministic, LLM-Based, and Hybrid Recovery',
    venue: 'Submitted to IEEE Access (IEEE)',
    year: 'Submitted 2026',
    href: 'https://github.com/Pouya-Mansournia/warehouse-amr-emergent-agents-public',
    text: 'Submitted manuscript presenting a paired-seed comparison of deterministic, LLM-based and hybrid recovery strategies for multi-robot failover.',
    highlights: ['Submitted', '2026', 'Multi-Robot Systems', 'LLM-Based Recovery']
  },
  {
    icon: BookOpen,
    title: 'From Reasoning Allocation to Behavioural Specialisation: Boundary Results in Multi-Robot Systems',
    venue: 'Submitted to Autonomous Robots (Springer Nature)',
    year: 'Submitted 2026',
    href: 'https://github.com/Pouya-Mansournia/RACA-Collective-Public',
    text: 'Submitted manuscript on boundary results connecting reasoning allocation to behavioural specialisation in multi-robot systems.',
    highlights: ['Submitted', '2026', 'Multi-Robot Systems', 'Reasoning Allocation']
  },
  {
    icon: BookOpen,
    title: 'The Cost and Limits of Proactive Reasoning Allocation in Multi-Robot Coordination',
    venue: 'Submitted to Robotics and Autonomous Systems (Elsevier)',
    year: 'Submitted 2026',
    href: 'https://github.com/Pouya-Mansournia/RACA-public',
    text: 'Submitted manuscript examining the cost and limits of proactive reasoning allocation in multi-robot coordination.',
    highlights: ['Submitted', '2026', 'Multi-Robot Systems', 'Reasoning Allocation']
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
    title: 'MRL@Work 2019 Team Description Paper',
    venue: 'RoboCupIndustrial RoboCup@Work, RoboCup 2019, Sydney, Australia',
    year: '2019',
    href: 'https://tdp.robocup.org/wp-content/uploads/tdp/robocup/2019/robocupindustrial-robocup-at-work/mrl-at-work-152/robocup-2019-robocupindustrial-robocup-at-work-mrl-at-work1wK2MJf85R.pdf',
    text: 'Team description paper for the MRL@Work entry in RoboCupIndustrial RoboCup@Work 2019, documenting the team platform, system architecture and applied industrial robotics capabilities.',
    highlights: ['RoboCup 2019', 'MRL@Work', 'RoboCup@Work', 'Industrial Robotics']
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
  { label: 'ADPList', href: 'https://adplist.org/mentors/pouya-mansournia-mr7v8q8t', initials: 'ADP' },
  { label: 'GitHub', href: 'https://github.com/Pouya-Mansournia', initials: 'GH' },
  { label: 'GrabCAD', href: 'https://grabcad.com/pouya.mansournia-1', initials: 'GC' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Pouya-Mansournia', initials: 'RG' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Pouyamansournia', initials: 'YT' }
];

export const journeyStages = [
  {
    period: '2017',
    title: 'Engineering',
    subtitle: 'Learning how to build.',
    body: [
      'My early work was rooted in mechanical engineering, electronics, robotics, embedded systems, and physical product development.',
      'At that stage, most of my attention was focused on technical questions: how a mechanism should work, how components should interact, how software and hardware should communicate, and how a system could be made reliable enough for the real world.'
    ],
    capabilities: ['Mechanical Engineering', 'Robotics', 'Embedded Systems', 'System Design', 'Prototyping']
  },
  {
    period: '2019',
    title: 'Product Engineering',
    subtitle: 'Learning what should be built.',
    body: [
      'As my responsibilities grew, engineering decisions increasingly became product decisions.',
      'At Tarfand, I moved into Product Engineering Management and later broader technical leadership. Working with a multidisciplinary team of approximately 18 people exposed me to the full path between engineering, customer requirements, product delivery, team execution, and commercial outcomes.',
      'Products we developed eventually reached markets including Russia and Iraq.',
      'This was where I began seeing engineering, product, team, and market as parts of the same system.'
    ],
    capabilities: ['Product Engineering', 'Team Leadership', 'Customer Requirements', 'Product Delivery', 'Technical Ownership']
  },
  {
    period: 'Digikala',
    title: 'Product Thinking at Operational Scale',
    subtitle: 'Learning how decisions behave at scale.',
    body: [
      'My work at Digikala introduced a very different environment.',
      'At large operational scale, a technical improvement is rarely just technical. Decisions around automation, reliability, throughput, process design, and system architecture directly affect operating cost, workforce capacity, customer experience, and business performance.',
      'This experience changed how I evaluated technology. The question was no longer only "Can we build it?" It became "Should we build it, where does it create the most leverage, and how do we measure the result?"'
    ],
    capabilities: ['Operations', 'Automation Strategy', 'Scale', 'Business Impact', 'Data-Informed Decisions']
  },
  {
    period: 'X-ROBOTIICS',
    title: '0→1 Product Building',
    subtitle: 'Learning how technology becomes a product.',
    body: [
      'At X-ROBOTIICS, my scope expanded from technical execution to end-to-end product ownership.',
      'I worked across problem discovery, customer needs, value proposition design, system architecture, product development, commercialization, RevOps, and early market validation.',
      'This was where product stopped being something adjacent to engineering and became a discipline I actively practiced.'
    ],
    capabilities: ['0→1', 'Product Discovery', 'Value Proposition', 'Product Strategy', 'GTM', 'RevOps']
  },
  {
    period: 'DBA',
    title: 'Innovation Management & FoundryOS',
    subtitle: 'Turning experience into a repeatable system.',
    body: [
      'My DBA studies in Innovation Management gave me an opportunity to step back and structure many of the methods I had learned through engineering, product development, startups, and operations.',
      'One result of that process became FoundryOS: an evolving framework for thinking systematically about discovery, product strategy, business models, GTM, execution, and decision-making.'
    ],
    capabilities: ['Innovation Management', 'Product Systems', 'Strategy', 'Business Models', 'GTM', 'Execution']
  }
];

export const productProcessSteps = ['Problem', 'Discovery', 'Evidence', 'Opportunity', 'Value Proposition', 'Build', 'Measure', 'GTM', 'Scale'];

export const productCapabilityGroups = [
  {
    title: 'Discover',
    subtitle: 'Understand the problem before designing the solution.',
    items: ['Customer interviews', 'Jobs to Be Done', 'Pain-point analysis', 'Workflow mapping', 'Market research', 'Existing behavior analysis']
  },
  {
    title: 'Decide',
    subtitle: 'Turn evidence into product choices.',
    items: ['Opportunity framing', 'Prioritization', 'Product strategy', 'Business case', 'Value proposition', 'Roadmapping']
  },
  {
    title: 'Build',
    subtitle: 'Translate product intent into execution.',
    items: ['PRDs', 'User stories', 'MVP definition', 'Technical collaboration', 'Architecture trade-offs', 'Cross-functional execution']
  },
  {
    title: 'Measure',
    subtitle: 'Determine whether the product is actually working.',
    items: ['Funnel analysis', 'Activation', 'Conversion', 'Retention', 'Product metrics', 'Operational metrics', 'Unit economics']
  },
  {
    title: 'Scale',
    subtitle: 'Turn validated value into a repeatable business.',
    items: ['Pricing', 'GTM', 'RevOps', 'Automation', 'Process design', 'Product operations']
  }
];

export const productCaseStudies = [
  {
    id: 'digikala',
    company: 'Digikala',
    title: 'Connecting automation decisions to operational leverage',
    role: 'Senior Manager, Robotics & Automation',
    context: [
      'Digikala operates at large logistics and operational scale. My work involved robotics and automation systems used in environments where reliability, throughput, process constraints, human operations, and cost all interact.',
      'The important challenge was not simply designing technology. It was deciding where technology could create enough operational leverage to justify the complexity of introducing it.'
    ],
    questions: [
      'Where should automation be introduced?',
      'Which bottlenecks create the highest operational leverage?',
      'When does automation improve throughput, reliability, or cost enough to justify CAPEX and added complexity?',
      'How should technology behave when deployed inside a live operational environment?'
    ],
    ownership: ['Robotics & automation strategy', 'Internal product thinking', 'Operational problem framing', 'Technical feasibility', 'System architecture', 'Reliability', 'Cross-functional coordination', 'Process improvement'],
    lesson: 'Technology is valuable only when it changes the performance of the system around it.'
  },
  {
    id: 'x-robotiics',
    company: 'X-ROBOTIICS / Acust.ai',
    title: 'From problem discovery to a real product in the field',
    role: 'Co-Founder & CINO',
    context: [
      'At X-ROBOTIICS, my responsibility expanded across the full product lifecycle. Acust.ai became one of the clearest examples of how my engineering and product work intersect.',
      'The product addresses workplace noise and environmental intelligence using connected sensing devices and software. My involvement covered product discovery, technical architecture, embedded hardware, backend systems, product packaging, pricing thinking, customer deployment, and commercialization.'
    ],
    evidence: ['4 customers', '120 devices installed', 'Largest deployment: 60 devices', 'Device-based SaaS / recurring software model'],
    journey: [
      { step: '1. Problem', text: 'Workplace noise and environmental conditions affect employee experience, concentration, HSE, and operational quality, but organizations often lack continuous, location-aware evidence.' },
      { step: '2. Discovery', text: 'The objective was to understand what organizations actually needed to observe, measure, communicate, and act on, instead of simply building another sensor.' },
      { step: '3. Value Proposition', text: 'Move from raw sensing toward actionable workplace intelligence.' },
      { step: '4. Product Architecture', text: 'Combine edge sensing, embedded processing, connectivity, data infrastructure, dashboards, alerts, and recurring software value.' },
      { step: '5. Commercialization', text: 'The product moved from prototype thinking into real customer deployments and recurring product packaging.' }
    ],
    ownership: ['Product discovery', 'Value proposition', 'Technical architecture', 'Embedded product strategy', 'SaaS thinking', 'Pricing', 'Customer deployment', 'GTM', 'RevOps', 'Product iteration'],
    lesson: 'A technical capability becomes a product only when the customer understands what decision it helps them make.'
  },
  {
    id: 'foundryos',
    company: 'FoundryOS',
    title: 'Turning product experience into a structured operating system',
    context: [
      'FoundryOS emerged from my work across engineering, product, startups, operations, and my DBA studies in Innovation Management.',
      'It is not intended to be presented as a generic collection of templates. The idea is to structure product and venture decisions into a repeatable system that helps reduce uncertainty.'
    ],
    positioning: 'A structured framework for moving from an ambiguous problem to evidence, product strategy, business model, GTM, and execution.',
    themes: ['Discovery', 'Customer problems', 'Evidence', 'Opportunity assessment', 'Product strategy', 'Value proposition', 'Business model', 'GTM', 'Execution', 'Decision documentation'],
    lesson: 'Good product management is not a collection of ceremonies. It is a system for reducing uncertainty and improving decisions.',
    ctaLabel: 'Explore FoundryOS',
    ctaRoute: 'open-source'
  }
];

export const productPrinciples = [
  { n: '01', title: 'Start with the problem', text: 'A sophisticated solution to the wrong problem is still the wrong product.' },
  { n: '02', title: 'Evidence before confidence', text: 'Customer behavior, operational data, experiments, and real constraints are stronger than internal conviction.' },
  { n: '03', title: 'Engineering is part of product strategy', text: 'Architecture, reliability, technical debt, manufacturability, and deployment constraints shape what a product can become.' },
  { n: '04', title: 'Optimize the system, not the feature', text: 'A local improvement is not useful if it creates larger downstream complexity.' },
  { n: '05', title: 'Measure outcomes, not activity', text: 'Shipping features is execution. Creating measurable customer or business value is the objective.' }
];

export const productIntersectionColumns = [
  { title: 'Desirability', question: 'Does the problem matter?', items: ['Customer pain', 'Workflow', 'Behavior', 'Adoption', 'Experience'] },
  { title: 'Feasibility', question: 'Can we build it well?', items: ['Architecture', 'Hardware', 'Software', 'Reliability', 'Integration'] },
  { title: 'Viability', question: 'Should the business build it?', items: ['Economics', 'Pricing', 'Operations', 'GTM', 'Scale'] }
];

export const productToolkitGroups = [
  { title: 'Discovery', items: ['Customer Interviews', 'JTBD', 'Problem Framing', 'Market Research', 'Workflow Analysis'] },
  { title: 'Product Definition', items: ['PRD', 'User Stories', 'MVP Definition', 'Roadmapping', 'Prioritization', 'Value Proposition'] },
  { title: 'Analytics', items: ['Product Metrics', 'Funnel Analysis', 'Conversion', 'Activation', 'Retention', 'Operational KPIs'] },
  { title: 'Business', items: ['Pricing', 'Business Models', 'GTM', 'RevOps', 'Unit Economics', 'Commercial Validation'] },
  { title: 'Delivery', items: ['Agile', 'Scrum', 'Cross-functional Leadership', 'Technical Planning', 'Architecture Collaboration', 'Product Operations'] }
];

// ── Systems view: layered map of how the work connects ──────────────────
// Ordered top (business) → bottom (physical). Each layer links to existing routes.
export const systemLayers = [
  {
    id: 'operations',
    title: 'Operations & Business',
    blurb: 'Throughput, cost, service levels, and the operational outcomes a system is accountable for.',
    tags: ['Operations', 'Product', 'Unit Economics'],
    links: [
      { label: 'Product Journey', route: 'product-journey' },
      { label: 'Product & Venture Work', route: 'works' }
    ]
  },
  {
    id: 'decision',
    title: 'Decision & Orchestration',
    blurb: 'Mission planning, task decomposition, resource scheduling, and fleet-level coordination.',
    tags: ['Orchestration', 'Scheduling', 'Resource Assignment'],
    links: [
      { label: 'Open-source decision systems', route: 'open-source' }
    ]
  },
  {
    id: 'twin',
    title: 'Digital Twin & Simulation',
    blurb: 'A simulation model that validates decisions and answers capacity questions before deployment.',
    tags: ['Digital Twin', 'FlexSim', 'Capacity Analysis'],
    links: [
      { label: 'Intelligent Warehouse Digital Twin', route: 'case-warehouse-digital-twin' }
    ]
  },
  {
    id: 'autonomy',
    title: 'ROS 2 & Autonomy',
    blurb: 'Navigation, mapping, localization, and task execution across single and multi-robot systems.',
    tags: ['ROS 2', 'SLAM', 'Nav2', 'Multi-Robot'],
    links: [
      { label: 'Robotics Platforms', route: 'work-robotics' },
      { label: 'Wheeled Mobile Robots', route: 'work-wheels-robot' },
      { label: 'Robotics Research', route: 'publications' }
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded & Edge',
    blurb: 'Motor control, sensor interfaces, real-time firmware, and the electronics that close the loop.',
    tags: ['STM32 / ESP32', 'PCB Design', 'Real-Time Control'],
    links: [
      { label: 'Embedded Electronics & PCB Design', route: 'work-electronics-design' },
      { label: 'Industrial IoT Monitoring', route: 'blog-iot' }
    ]
  },
  {
    id: 'physical',
    title: 'Physical Robots & Automation',
    blurb: 'Mechanisms, drivetrains, conveyors, sorters, and machines built and deployed in the real world.',
    tags: ['Mechanical Design', 'Drivetrain', 'Material Handling'],
    links: [
      { label: 'Wheel Sortation System', route: 'blog-sorter' },
      { label: 'Conveyor & Material Handling', route: 'work-material-handling' },
      { label: 'Precision Mechatronics', route: 'work-precision-positioning' }
    ]
  }
];

// Homepage "Featured Systems": four flagship system-level stories.
export const featuredSystems = [
  {
    id: 'warehouse-digital-twin',
    title: 'Intelligent Warehouse Digital Twin',
    subtitle: 'Simulation, robot orchestration, and real-time warehouse intelligence.',
    image: '/portfolio-images/digital-twin-overview.png',
    imageAlt: 'Warehouse digital twin dashboard showing a FlexSim simulation and a ROS 2 robot fleet side by side with queue levels and processor utilization',
    tags: ['Digital Twin', 'FlexSim', 'Robot Orchestration', 'FastAPI', 'ROS 2'],
    kpis: [
      { value: '3 layers', label: 'Simulation · Orchestration · Execution' },
      { value: '25+ tests', label: 'Bridge + scheduler coverage' }
    ],
    route: 'case-warehouse-digital-twin',
    repo: 'https://github.com/Pouya-Mansournia/flexsim-digital-twin'
  },
  {
    id: 'warehouse-amr',
    title: 'Warehouse AMR ROS 2',
    subtitle: 'Autonomy for warehouse robots: SLAM, Nav2, and multi-robot task execution.',
    image: '/portfolio-images/Autonomous Mobile Robot (AMR) Platform.jpg',
    imageAlt: 'Autonomous mobile robot platform for warehouse automation',
    tags: ['ROS 2', 'SLAM', 'Nav2', 'Multi-Robot', 'Warehouse Robotics'],
    kpis: [
      { value: 'ROS 2', label: 'Navigation + task stack' },
      { value: 'Fleet', label: 'Multi-robot coordination' }
    ],
    route: 'work-robotics',
    repo: 'https://github.com/Pouya-Mansournia/warehouse-amr-ros2'
  },
  {
    id: 'delivery-robot',
    title: 'Delivery Robot',
    subtitle: 'A deployed last-mile robot as evidence of physical system execution.',
    image: '/portfolio-images/Last-Mile Autonomous Delivery Robot Prototype.jpg',
    imageAlt: 'Last-mile autonomous delivery robot prototype with six-wheel mobile platform and LiDAR navigation',
    tags: ['Autonomous Mobility', 'Sensor Fusion', 'Field Testing', 'ROS'],
    kpis: [
      { value: '6-wheel', label: 'Active-suspension platform' },
      { value: '20 kg', label: 'Payload, field-tested' }
    ],
    route: 'work-wheels-robot',
    repo: 'https://github.com/Pouya-Mansournia/Delivery-Robot-ROS'
  },
  {
    id: 'precision-mechatronics',
    title: 'Precision Mechatronics',
    subtitle: 'Flexure mechanisms, piezo actuation, and closed-loop precision positioning.',
    image: '/portfolio-images/Piezo-Driven Fast Steering Mirror Actuator.png',
    imageAlt: 'Piezo-driven fast steering mirror precision actuator with flexure mechanism for optical positioning',
    tags: ['Piezo Actuation', 'Flexure Mechanism', 'Closed-Loop Control', 'Microradian'],
    kpis: [
      { value: 'µrad', label: 'Angular resolution' },
      { value: 'STM32', label: 'Real-time control loop' }
    ],
    route: 'work-precision-positioning'
  }
];

// "How I Build Systems": five-step operating loop (section 5).
export const buildProcess = [
  { n: '01', title: 'Model the System', text: 'Understand the physical, operational, technical, and product constraints before proposing a solution.' },
  { n: '02', title: 'Separate Responsibilities', text: 'Simulation, orchestration, robot autonomy, embedded control, and business systems should not own the same decisions.' },
  { n: '03', title: 'Build Measurable Loops', text: 'Observe → Understand → Decide → Execute → Measure. Every layer reports something you can act on.' },
  { n: '04', title: 'Validate Before Scaling', text: 'Use simulation, experiments, and staged deployment before introducing unnecessary complexity.' },
  { n: '05', title: 'Optimize the Whole System', text: 'Optimize system-level outcomes rather than isolated components.' }
];

export const buildProcessLoop = ['Observe', 'Understand', 'Decide', 'Execute', 'Measure'];

// /systems/ page: work organized by system layer instead of chronology (section 6).
export const systemsGroups = [
  {
    id: 'twin',
    title: 'Digital Twin & Simulation',
    blurb: 'Simulation models that validate decisions and answer capacity questions before deployment.',
    items: [
      { label: 'Intelligent Warehouse Digital Twin', route: 'case-warehouse-digital-twin', note: 'FlexSim model, telemetry bridge, and robot scheduling.' },
      { label: 'Dimension & Point-Cloud Detection', route: 'blog-dimension-detection', note: '3D vision and measurement for logistics data capture.' }
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics & Autonomous Systems',
    blurb: 'Mobile robots and autonomy stacks from research platforms to deployed prototypes.',
    items: [
      { label: 'Warehouse AMR (ROS 2)', href: 'https://github.com/Pouya-Mansournia/warehouse-amr-ros2', note: 'SLAM, Nav2, and multi-robot task execution.' },
      { label: 'Delivery Robot', route: 'work-wheels-robot', note: 'Deployed last-mile mobile platform.' },
      { label: 'Robotics Platforms', route: 'work-robotics', note: 'Rescue, competition, and applied mobile robots.' },
      { label: 'UAV Systems', route: 'work-uav', note: 'Lightweight aerial platforms for RoboCup rescue.' }
    ]
  },
  {
    id: 'orchestration',
    title: 'Orchestration & Decision Systems',
    blurb: 'Mission planning, scheduling, and the decision layer that coordinates resources.',
    items: [
      { label: 'FlexSim Digital Twin repository', href: 'https://github.com/Pouya-Mansournia/flexsim-digital-twin', note: 'Mission, task, and resource-scheduling architecture behind the case study.' },
      { label: 'ARCHON, a decision and architecture OS', href: 'https://github.com/Pouya-Mansournia/ARCHON', note: 'Decision and architecture system for AI-agent workflows.' },
      { label: 'Reasoning Allocation in Multi-Robot Systems', route: 'publications', note: 'Research on when deeper reasoning helps or hurts robotic systems.' }
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded & Edge Systems',
    blurb: 'Motor control, sensing, and real-time firmware that close the control loop.',
    items: [
      { label: 'Embedded Electronics & PCB Design', route: 'work-electronics-design', note: 'Motor drivers, piezo controllers, power management.' },
      { label: 'Industrial IoT Monitoring Platform', route: 'blog-iot', note: 'ESP32 edge nodes and Ethernet controllers.' }
    ]
  },
  {
    id: 'precision',
    title: 'Precision Mechatronics',
    blurb: 'Flexure mechanisms, piezo actuation, and high-resolution positioning.',
    items: [
      { label: 'Piezo-Driven Fast Steering Mirror', route: 'work-precision-positioning', note: 'Flexure-based parallel kinematics, microradian resolution.' },
      { label: 'Manipulators & End-Effectors', route: 'work-manipulator', note: 'Micromanipulators, grippers, and actuation design.' }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Automation',
    blurb: 'Conveyors, sorters, and machines built and deployed at production scale.',
    items: [
      { label: 'High-Speed Wheel Sortation System', route: 'blog-sorter', note: '20+ units operational in fulfillment centers.' },
      { label: 'Conveyor & Material Handling', route: 'work-material-handling', note: 'Roller systems, flow design, PLC automation.' },
      { label: 'Put-to-Light / Pick-to-Light', route: 'blog-put-to-light', note: '4000 units deployed for warehouse operations.' },
      { label: 'Industrial Machinery & Manufacturing', route: 'work-machinery', note: 'Production machines and field equipment.' }
    ]
  },
  {
    id: 'product',
    title: 'Product & Technical Systems',
    blurb: 'Turning engineering execution into products, ventures, and operating frameworks.',
    items: [
      { label: 'Product Journey', route: 'product-journey', note: 'From engineering execution to product and business ownership.' },
      { label: 'FoundryOS', href: 'https://github.com/Pouya-Mansournia/FoundryOS', note: 'Open framework for structured product and venture execution.' }
    ]
  }
];

// Research themes shown above the existing publications list (§12).
export const researchThemes = [
  {
    title: 'Adaptive Intelligence in Multi-Robot Systems',
    text: 'When deeper reasoning improves robotic systems, and when latency, compute cost, and complexity reduce real-world performance.'
  },
  {
    title: 'Robotics Systems Architecture',
    text: 'How simulation, orchestration, autonomy, and physical execution should be separated and coordinated.'
  },
  {
    title: 'Precision & Embedded Mechatronics',
    text: 'Sensing, control, actuation, flexure mechanisms, and precision engineering.'
  }
];

// Product Journey executive arc (shown as a strip above the full page).
export const productJourneyArc = ['Engineer', 'Engineering Manager', 'Systems Owner', 'Founder', 'Product & Technical Strategy'];

// Case study content: Intelligent Warehouse Digital Twin (section 9).
// Prose-first, rendered in the site's long-form article layout.
export const caseWarehouseDigitalTwin = {
  route: 'case-warehouse-digital-twin',
  title: 'From Warehouse Simulation to Robot Orchestration',
  subtitle: 'A digital-twin architecture where simulation validates decisions, an orchestration layer makes them, and ROS 2 executes robot-level behavior.',
  image: '/portfolio-images/digital-twin-overview.png',
  imageAlt: 'Warehouse digital twin dashboard showing a FlexSim simulation and a ROS 2 robot fleet side by side with queue levels, processor utilization, and fleet telemetry',
  repo: 'https://github.com/Pouya-Mansournia/flexsim-digital-twin',
  role: 'Architecture and implementation',
  timeframe: '2026',
  tags: ['Digital Twin', 'FlexSim', 'Robot Orchestration', 'FastAPI', 'ROS 2', 'Warehouse Automation'],
  pipeline: ['FlexSim model', 'Telemetry bridge', 'Orchestration and scheduling', 'ROS 2 execution', 'Physical robots'],
  concept: 'FlexSim validates decisions. The orchestration layer makes decisions. ROS 2 executes robot behavior.',
  sections: [
    {
      n: '01',
      title: 'The problem',
      paragraphs: [
        'Warehouse automation questions are usually answered before the system exists. How many robots can we add before the inbound queue backs up? Which bottleneck actually limits throughput? What happens when a robot drops out mid-shift? In practice these get answered with spreadsheets, vendor claims, and intuition, and the real answer only arrives once the hardware is on the floor.',
        'I wanted an environment where a decision could be simulated, coordinated, and executed through the same architecture that would eventually run in production, so that the model answering "should we build it" is the one that later runs it.'
      ]
    },
    {
      n: '02',
      title: 'Context and constraints',
      paragraphs: [
        'A warehouse automation stack has three parts that are normally built by different teams with incompatible interfaces: a simulation model, an orchestration layer that assigns work, and a robot fleet that carries it out. The goal was one architecture where each layer owns a distinct responsibility and can be replaced on its own.',
        'FlexSim can only talk to the outside world over HTTP and JSON, with strict case-sensitive method handling and tight limits on model parameter types, so the integration had to be deliberate rather than clever. Simulation telemetry and real-environment telemetry had to stay in separate stores, because merging them hides exactly the differences the twin exists to show. The robot side had to be swappable: a mock fleet now, ROS 2 later, with no change to the API contract. And the whole thing had to start on a single Windows workstation in about a minute so it could be shown, not just described.'
      ]
    },
    {
      n: '03',
      title: 'System architecture',
      paragraphs: [
        'A FlexSim 2027 warehouse model runs inbound sortation and outbound put-wall operations and posts queue, processor, and robot telemetry to a bridge every few simulated seconds. The bridge is a FastAPI service that keeps simulation and real-environment state in separate stores, exposes REST endpoints for both, serves a live dashboard, and dispatches commands back out.',
        'Behind the bridge sits the orchestration layer. It turns a business request into a transport mission, decomposes the mission into tasks, and assigns each task to a robot using an explicit weighted score over travel cost, battery, queue backlog, utilization, and priority. Fleet, workstation, and traffic managers track availability, readiness, and congestion so the scheduler is working from a current picture rather than a stale one.',
        'On the robot side, a Python fleet simulator with realistic acceleration and deceleration stands in for the machines today. A future ROS 2 and Nav2 adapter drops into the same interface without touching the contract above it, and the same orchestration decisions later reach physical robots and, beyond that, WMS, MES, ERP, and PLC or OPC UA integration.'
      ]
    },
    {
      n: '04',
      title: 'What I owned',
      paragraphs: [
        'I designed and built the whole path end to end: the FlexScript telemetry integration and its verified-scripts reference, the FastAPI bridge with its telemetry ingestion, real-environment endpoints, command dispatch, and decision observability, and the orchestration core with the mission and task managers and the weighted resource scheduler.',
        'I also built the live dashboard as a no-build vanilla-JS page that shows the simulation and the real environment side by side, and a test suite of more than twenty-five bridge tests plus unit tests for the scheduler and adapters, so the behavior is pinned down rather than assumed.'
      ]
    },
    {
      n: '05',
      title: 'Engineering and product decisions',
      paragraphs: [
        'The decisions that mattered most were about boundaries. Keep FlexSim and real telemetry in independent stores behind one bridge. Define the robot side as an adapter so the mock fleet and a future ROS 2 stack are interchangeable. Make the scheduling policy an explicit weighted score rather than a hidden heuristic, so it can be read, argued with, and tested. Ship the dashboard with no build step so the twin stays inspectable without a toolchain.',
        'On the product side, the public name is "Intelligent Warehouse Digital Twin" and the internal term "RMS" stays internal. Scope stayed narrow on purpose: one warehouse model, one scheduling policy, one fleet, working all the way through, rather than a broad system that only works in pieces. Fleet sizing and failure scenarios are treated as the first real questions the twin should answer for someone.'
      ]
    },
    {
      n: '06',
      title: 'Results',
      paragraphs: [
        'The current version has a working FlexSim-to-bridge integration with a live dual-system dashboard, a mock fleet whose robot count can be changed live from that dashboard, and a tested scheduling policy running end to end against the real bridge.',
        'It has already earned its keep as a discovery tool. Running the model surfaced a genuine bottleneck: an inbound queue with 172 totes in, 35 out, 137 queued, and an average wait above twelve minutes. That is a real downstream capacity mismatch in the modeled operation, not a simulation artifact, and it is exactly the kind of thing that is expensive to find after deployment.'
      ]
    },
    {
      n: '07',
      title: 'What I learned',
      paragraphs: [
        'A digital twin is worth the effort when the architecture that answers "should we build it" is also the one that runs it. Separating decision-making from validation from execution is what lets each layer be replaced without disturbing the others, and it is also what makes the whole system measurable, because every layer now reports something you can act on.'
      ]
    }
  ]
};
