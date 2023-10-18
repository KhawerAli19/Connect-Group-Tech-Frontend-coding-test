import "./style.css";

export const PageLayout = (props) => {
    return (
        <>
            <section className="">
                <div className='container'>
                    <div className="">
                        <div className="">
                            <div className="">
                                {props?.children}
                                {props?.backOption &&
                                    <div className="text-center mt-4">
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
