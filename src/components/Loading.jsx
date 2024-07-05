import React from "react";

const Loading = ({ loading, error, children }) => {
    const elementType = children?.type;

    const renderHandler = () => {
        if (elementType === "button") {
            const cloneButton = React.cloneElement(
                children,
                { disabled: loading },
                loading ? "Loading..." : children.props.children
            );
            return (
                <>
                    {cloneButton}
                    {error && (
                        <p className="text-red-500 text-xs mt-2">
                            <br />
                            {error.message.toString() === "invalid user name or pass" ? ("اسم المستخدم أو كلمة المرور غير صالحة") : error.message.toString()}
                        </p>
                    )}
                </>
            );
        }
        return (
            <>
                {loading ? (
                    <p>loading please wait...</p>
                ) : error.message ? (
                    <p>{error.message.toString()}</p>
                ) : (
                    children
                )}
            </>
        );
    };

    return renderHandler();
};

export default Loading;
