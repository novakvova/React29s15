import React from 'react'


class Article extends React.Component {

    constructor(props) {
        super(props);
        // const {semen} = this.props;
        // let t=this.props.semen;
        // console.log('------props ctor-------', props);
        // console.log('------props ctor SEMEN-------', semen);
        //this.btnHandleClose=this.btnHandleClose.bind(this);
    }

    state = {
        isOpen: true
    };
    render() {
        console.log("---Article props---", this.props);
        const { article } = this.props;
        const body = <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.btnHandleClose}>
                        {this.state.isOpen ? 'close' : 'open'} 
                    </button>
                </h2>
                {body}
                <h3>create date: {(new Date(article.date)).toDateString()}</h3>

            </div>
        );
    }

    btnHandleClose =() => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        //console.log("------", 'clicked');
    }

    // btnHandleClose = function() {
    //     console.log("---this btn----",this);
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    //     //console.log("------", 'clicked');
    // }
}
export default Article;