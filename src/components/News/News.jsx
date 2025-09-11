import React from "react";


const News = (props) =>{
    return (
        <>

            {props.allNews.map((news) => {
                return (
                    <div>
                        <div>
                            <h3>{news.title}</h3>
                        </div>
                        <div>
                            <h4>{news.content}</h4>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default News;