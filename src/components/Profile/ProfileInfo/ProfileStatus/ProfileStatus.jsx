import React  from "react";
import s from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status,

    }


    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    //создал метод для прокидываени в onDoubleClick элементы. ( создал при помощи стрелочной , что бы не терялся контекст при применении this)



    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status);
    }
    //создал метод для прокидываени в onDoubleClick элементы. ( создал при помощи стрелочной , что бы не терялся контекст при применении this)




    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       })

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }


    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}  onBlur={this.deactiveteEditMode} value={this.state.status }/>
                    </div>:
                    <div>
                        <span onDoubleClick={this.activeteEditMode}>{this.props.status|| "----"}</span>
                    </div>}
            </div>

        )
    }
}

export default ProfileStatus;