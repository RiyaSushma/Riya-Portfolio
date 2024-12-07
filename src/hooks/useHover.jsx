function useHover() {
    
    const handleMouseMove = (e, id, isButton = false) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const element = document.getElementById(id);
        
        if(!x || !y) {
            // element.style.background = "#a166ab";
        } else {
            element.style.background = `radial-gradient(circle at ${x}px ${y}px, #5D3FD3, transparent), radial-gradient(circle at ${y}px ${x}px, #a166ab, transparent 80%)`;
        }

        if(isButton) {
            element.style.zIndex = 3;
        }
    }

    const handleMouseLeave = (id) => {
        const element = document.getElementById(id);
        element.style.background = "transparent";
    }

    return { handleMouseMove, handleMouseLeave };
}

export default useHover;