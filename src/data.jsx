import { BarChart3, Calendar, HelpCircle, History, MessageCircle, PieChart, Settings, TestTube, Users } from "lucide-react";

export const navigationItems = [
  { icon: PieChart, label: 'Dashboard', active: true },
  { icon: History, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Users, label: 'Appointments' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: TestTube, label: 'Tests' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' },
  { icon: Settings, label: 'Setting' }
];

export const healthData = [
  { 
    name: 'Lungs', 
    date: '26 Oct 2021', 
    status: 'warning', 
    icon: '🫁',
    color: '#B04746'
  },
  { 
    name: 'Teeth', 
    date: '26 Oct 2021', 
    status: 'good', 
    icon: '🦷',
    color: '#7ED3C4'
  },
  { 
    name: 'Bone', 
    date: '26 Oct 2021', 
    status: 'warning', 
    icon: '🦴',
    color: '#FF8A80'
  }
];

export const appointmentData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🏥' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
    ]
  }
];


export const activityData = [
    {
      day: 'Mon',
      bars: [
        // Column 1 (x: 15) - starts at y: 20, with 3px gaps
        { height: 25, color: 'grey', x: 15, y: 20 },
        { height: 30, color: 'teal', x: 15, y: 48 }, // 20+25+3
        { height: 20, color: 'indigo', x: 15, y: 81 }, // 48+30+3
        // Column 2 (x: 35) - starts at y: 45, with 3px gaps
        { height: 35, color: 'teal', x: 35, y: 45 },
        { height: 25, color: 'grey', x: 35, y: 83 }, // 45+35+3
        // Column 3 (x: 55) - starts at y: 10, with 3px gaps
        { height: 40, color: 'indigo', x: 55, y: 10 },
        { height: 30, color: 'teal', x: 55, y: 53 }, // 10+40+3
        { height: 25, color: 'grey', x: 55, y: 86 }, // 53+30+3
        // Column 4 (x: 75) - starts at y: 35, with 3px gaps
        { height: 30, color: 'grey', x: 75, y: 35 },
        { height: 25, color: 'indigo', x: 75, y: 68 }, // 35+30+3
      ]
    },
    {
      day: 'Tues',
      bars: [
        // Column 1 (x: 15) - starts at y: 30, with 3px gaps
        { height: 35, color: 'indigo', x: 15, y: 30 },
        { height: 25, color: 'teal', x: 15, y: 68 }, // 30+35+3
        // Column 2 (x: 35) - starts at y: 5, with 3px gaps
        { height: 30, color: 'grey', x: 35, y: 5 },
        { height: 40, color: 'indigo', x: 35, y: 38 }, // 5+30+3
        { height: 20, color: 'teal', x: 35, y: 81 }, // 38+40+3
        // Column 3 (x: 55) - starts at y: 40, with 3px gaps
        { height: 25, color: 'teal', x: 55, y: 40 },
        { height: 35, color: 'grey', x: 55, y: 68 }, // 40+25+3
        // Column 4 (x: 75) - starts at y: 15, with 3px gaps
        { height: 45, color: 'indigo', x: 75, y: 15 },
        { height: 30, color: 'grey', x: 75, y: 63 }, // 15+45+3
      ]
    },
    {
      day: 'Wed',
      bars: [
        // Column 1 (x: 15) - starts at y: 25, with 3px gaps
        { height: 30, color: 'teal', x: 15, y: 25 },
        { height: 35, color: 'indigo', x: 15, y: 58 }, // 25+30+3
        // Column 2 (x: 35) - starts at y: 50, with 3px gaps
        { height: 25, color: 'grey', x: 35, y: 50 },
        { height: 30, color: 'teal', x: 35, y: 78 }, // 50+25+3
        // Column 3 (x: 55) - starts at y: 0, with 3px gaps
        { height: 40, color: 'indigo', x: 55, y: 0 },
        { height: 25, color: 'grey', x: 55, y: 43 }, // 0+40+3
        { height: 30, color: 'teal', x: 55, y: 71 }, // 43+25+3
        // Column 4 (x: 75) - starts at y: 35, with 3px gaps
        { height: 35, color: 'grey', x: 75, y: 35 },
        { height: 25, color: 'indigo', x: 75, y: 73 }, // 35+35+3
      ]
    },
    {
      day: 'Thurs',
      bars: [
        // Column 1 (x: 15) - starts at y: 40, with 3px gaps
        { height: 30, color: 'grey', x: 15, y: 40 },
        { height: 25, color: 'teal', x: 15, y: 73 }, // 40+30+3
        // Column 2 (x: 35) - starts at y: 10, with 3px gaps
        { height: 45, color: 'indigo', x: 35, y: 10 },
        { height: 30, color: 'grey', x: 35, y: 58 }, // 10+45+3
        // Column 3 (x: 55) - starts at y: 20, with 3px gaps
        { height: 35, color: 'teal', x: 55, y: 20 },
        { height: 40, color: 'indigo', x: 55, y: 58 }, // 20+35+3
        // Column 4 (x: 75) - starts at y: 45, with 3px gaps
        { height: 25, color: 'grey', x: 75, y: 45 },
        { height: 30, color: 'teal', x: 75, y: 73 }, // 45+25+3
      ]
    },
    {
      day: 'Fri',
      bars: [
        // Column 1 (x: 15) - starts at y: 15, with 3px gaps
        { height: 40, color: 'indigo', x: 15, y: 15 },
        { height: 25, color: 'grey', x: 15, y: 58 }, // 15+40+3
        { height: 20, color: 'teal', x: 15, y: 86 }, // 58+25+3
        // Column 2 (x: 35) - starts at y: 35, with 3px gaps
        { height: 30, color: 'teal', x: 35, y: 35 },
        { height: 35, color: 'indigo', x: 35, y: 68 }, // 35+30+3
        // Column 3 (x: 55) - starts at y: 5, with 3px gaps
        { height: 35, color: 'grey', x: 55, y: 5 },
        { height: 30, color: 'teal', x: 55, y: 43 }, // 5+35+3
        { height: 25, color: 'indigo', x: 55, y: 76 }, // 43+30+3
        // Column 4 (x: 75) - starts at y: 50, with 3px gaps
        { height: 25, color: 'grey', x: 75, y: 50 },
        { height: 30, color: 'indigo', x: 75, y: 78 }, // 50+25+3
      ]
    },
    {
      day: 'Sat',
      bars: [
        // Column 1 (x: 15) - starts at y: 35, with 3px gaps
        { height: 30, color: 'teal', x: 15, y: 35 },
        { height: 35, color: 'grey', x: 15, y: 68 }, // 35+30+3
        // Column 2 (x: 35) - starts at y: 20, with 3px gaps
        { height: 25, color: 'indigo', x: 35, y: 20 },
        { height: 40, color: 'teal', x: 35, y: 48 }, // 20+25+3
        // Column 3 (x: 55) - starts at y: 0, with 3px gaps
        { height: 35, color: 'grey', x: 55, y: 0 },
        { height: 30, color: 'indigo', x: 55, y: 38 }, // 0+35+3
        { height: 25, color: 'teal', x: 55, y: 71 }, // 38+30+3
        // Column 4 (x: 75) - starts at y: 40, with 3px gaps
        { height: 30, color: 'indigo', x: 75, y: 40 },
        { height: 25, color: 'grey', x: 75, y: 73 }, // 40+30+3
      ]
    },
    {
      day: 'Sun',
      bars: [
        // Column 1 (x: 15) - starts at y: 10, with 3px gaps
        { height: 35, color: 'grey', x: 15, y: 10 },
        { height: 30, color: 'teal', x: 15, y: 48 }, // 10+35+3
        { height: 25, color: 'indigo', x: 15, y: 81 }, // 48+30+3
        // Column 2 (x: 35) - starts at y: 45, with 3px gaps
        { height: 25, color: 'indigo', x: 35, y: 45 },
        { height: 30, color: 'grey', x: 35, y: 73 }, // 45+25+3
        // Column 3 (x: 55) - starts at y: 25, with 3px gaps
        { height: 40, color: 'teal', x: 55, y: 25 },
        { height: 30, color: 'indigo', x: 55, y: 68 }, // 25+40+3
        // Column 4 (x: 75) - starts at y: 5, with 3px gaps
        { height: 30, color: 'grey', x: 75, y: 5 },
        { height: 35, color: 'teal', x: 75, y: 38 }, // 5+30+3
        { height: 25, color: 'indigo', x: 75, y: 76 }, // 38+35+3
      ]
    }
  ];