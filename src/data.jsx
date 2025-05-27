import {
  BarChart3,
  Calendar,
  HelpCircle,
  History,
  MessageCircle,
  PieChart,
  Settings,
  TestTube,
  Users,
} from "lucide-react";

export const navigationItems = [
  { icon: PieChart, label: "Dashboard", active: true },
  { icon: History, label: "History" },
  { icon: Calendar, label: "Calendar" },
  { icon: Users, label: "Appointments" },
  { icon: BarChart3, label: "Statistics" },
  { icon: TestTube, label: "Tests" },
  { icon: MessageCircle, label: "Chat" },
  { icon: HelpCircle, label: "Support" },
  { icon: Settings, label: "Setting" },
];

export const healthData = [
  {
    name: "Lungs",
    date: "26 Oct 2021",
    status: "warning",
    icon: "🫁",
    color: "#B04746",
  },
  {
    name: "Teeth",
    date: "26 Oct 2021",
    status: "good",
    icon: "🦷",
    color: "#7ED3C4",
  },
  {
    name: "Bone",
    date: "26 Oct 2021",
    status: "warning",
    icon: "🦴",
    color: "#FF8A80",
  },
];

export const activityData = [
  {
    day: "Mon",
    bars: [
      { height: 98, color: "grey", x: 15, y: 22 },
      { height: 62, color: "teal", x: 35, y: 41 },
      { height: 28, color: "grey", x: 55, y: 56 },
      { height: 22, color: "grey", x: 55, y: 87 },
      { height: 33, color: "grey", x: 75, y: 38 },
    ],
  },
  {
    day: "Tues",
    bars: [
      { height: 41, color: "indigo", x: 15, y: 28 },
      { height: 58, color: "teal", x: 15, y: 72 },
      { height: 65, color: "indigo", x: 35, y: 35 },
      { height: 29, color: "teal", x: 55, y: 42 },
      { height: 31, color: "grey", x: 55, y: 74 },
      { height: 48, color: "grey", x: 75, y: 18 },
    ],
  },
  {
    day: "Wed",
    bars: [
      { height: 102, color: "grey", x: 15, y: 25 },
      { height: 51, color: "teal", x: 35, y: 48 },
      { height: 35, color: "grey", x: 55, y: 50 },
      { height: 27, color: "grey", x: 55, y: 88 },
      { height: 26, color: "teal", x: 75, y: 39 },
    ],
  },
  {
    day: "Thurs",
    bars: [
      { height: 110, color: "grey", x: 15, y: 19 },
      { height: 49, color: "teal", x: 35, y: 47 },
      { height: 32, color: "indigo", x: 55, y: 51 },
      { height: 24, color: "grey", x: 55, y: 86 },
      { height: 29, color: "grey", x: 75, y: 33 },
    ],
  },
  {
    day: "Fri",
    bars: [
      { height: 95, color: "teal", x: 15, y: 24 },
      { height: 59, color: "teal", x: 35, y: 43 },
      { height: 34, color: "grey", x: 55, y: 54 },
      { height: 21, color: "grey", x: 55, y: 91 },
      { height: 36, color: "indigo", x: 75, y: 32 },
    ],
  },
  {
    day: "Sat",
    bars: [
      { height: 108, color: "grey", x: 15, y: 17 },
      { height: 53, color: "teal", x: 35, y: 46 },
      { height: 31, color: "grey", x: 55, y: 52 },
      { height: 28, color: "grey", x: 55, y: 84 },
      { height: 27, color: "teal", x: 75, y: 37 },
    ],
  },
  {
    day: "Sun",
    bars: [
      { height: 100, color: "grey", x: 15, y: 21 },
      { height: 57, color: "teal", x: 35, y: 44 },
      { height: 25, color: "grey", x: 55, y: 58 },
      { height: 30, color: "indigo", x: 55, y: 86 },
      { height: 34, color: "grey", x: 75, y: 36 },
    ],
  },
];
