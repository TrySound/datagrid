export default (...list) => (props, nextProps) =>
    list.some(key => props[key] !== nextProps[key]);
