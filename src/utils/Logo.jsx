function Logo({ width = "5rem" }) {
    const fallbackUrl = "https://github.com/user-attachments/assets/7cc3eb69-c4a0-497e-806b-9f4f25cd95e1";

    const primaryUrl = "../public/images/logo.png";

    const imageUrl = fallbackUrl || primaryUrl;

    return (
        <div className="w-12" style={{ width }}>
            <img 
                src={{ imageUrl }}
                className="w-full"
                width
                onError={(e) => e.target.src = imageUrl}
            />
        </div>
    );
}

export default Logo;