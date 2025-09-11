import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import News from "./News";
import {setNewsAC} from "../../redux/news-reducer";







class NewsContainer extends React.Component{

    constructor(props) {
        super(props);

    }
    //Зачем тут он нужен? если его убрать то ничего не ломается , конструктор пустой по ссути , просто вызывает супер которые вызывает родительский конструктор и передает в него пропсы



    componentDidMount() {
        axios.get(`https://gnews.io/api/v4/search?q=Google&lang=ru&max=5&apikey=cb487b0c9f5b03d09f2387476ae78e8f`)

            .then((response) => {
                this.props.setNews(response.data.articles)


                
            });

    }



    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
            });


    }


    render(){
        return <News allNews={this.props.news}/>
    }
}


let mapStateToProps = (state)=>{
    return {
        news:state.newsPage.news,

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setNews:(news)=>{
            dispatch(setNewsAC(news))
        }
    }
}





export default connect(mapStateToProps,mapDispatchToProps )(NewsContainer)
