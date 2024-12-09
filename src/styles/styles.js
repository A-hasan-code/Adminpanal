const styles = {
    // Container Styles
    customContainer: "w-11/12 hidden sm:block", // Main container, visible on sm and above screens
    section: "w-11/12 mx-auto", // Centered container with some width control

    // Typography Styles
    heading: "text-[27px] text-center md:text-start font-semibold font-Roboto pb-[20px]", // Headings with responsive text alignment and font-weight
    productTitle: "text-[25px] font-semibold font-Roboto text-[#333]", // Product title styling
    productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto", // Discounted price styling
    price: "font-medium text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through", // Original price with strikethrough
    shopName: "pt-3 text-[15px] text-blue-400 pb-3", // Shop name with padding and color styling

    // Indicators & Decorations
    activeIndicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-crimson", // Indicator for active status
    activeStatus: "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]", // Active status indicator (green)

    // Buttons & Interactions
    button: "w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer", // General button style
    cartButton: "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer", // Cart button with rounded corners
    cartButtonText: "text-[#fff] text-[16px] font-semibold", // Cart button text styling

    // Form & Input Elements
    input: "w-full border p-1 rounded-[5px]", // Standard input field with border and padding

    // Layout Utilities
    normalFlex: "flex items-center", // Utility class for flexbox with centered items
};

export default styles;
