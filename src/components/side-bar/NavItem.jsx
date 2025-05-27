const NavItem = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <a 
      key={index} 
      href="#" 
      className={`nav-item ${item.active ? 'active' : ''}`}
    >
      <Icon size={18} />
      <span>{item.label}</span>
    </a>
  );
};

export default NavItem;