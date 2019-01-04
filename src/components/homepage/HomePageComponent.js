import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import '../../App.css'
import clock from './images/clock.jpg'
import {apiService} from "../../services/api-service/api-service";

class HomePageComponent extends React.Component {

    citation = [
        'Билл Гейтс: "Разбивая работу на множество отдельных участков и поручая их множеству отдельных работников, вы можете зайти так далеко, что уже никто не будет представлять себе процесс в целом и колеса начнут вращаться вхолостую"',
        'Йонас Риддерстрале: "Соедини технологии с доверием - и деньги окажутся совсем близко"',
        'Олдос Хаксли: "В эру передовых технологий неэффективность - страшный грех перед Господом"',
        'Ли Якокка: "Когда секретари бездельничают и занимаются болтовней - это явный признак того, что учреждение находится в состоянии загнивания"',
        'Альберт Эйнштейн: "Стремись не к тому, чтобы добиться успеха, а к тому, чтобы твоя жизнь имела смысл',
        'Аристотель Онассис: "У меня нет ни друзей, ни врагов - только конкуренты"',
        'Дэвид Причард: "Если я приму на работу кучу непригодных субьектов, это нанесет нам большой ущерб, потому что понадобится время, чтобы от них избавиться. Они начинают проникать в организацию и потом нанимают на работу таких же непригодных работников, как и они сами"',
        'Дэйвид Огилви: "Если в один прекрасный день вы обнаружите, что говорите одно и то же кардиналу и циркачу, для вас все закончено. К различным социальным, профессиональным, возрастным группам нужен различный подход"',
        'Дэйвид Огилви: "Почему одни предпочитают "Джэк Дэниэлc, а другие - "Оулд Крау" или "Тэйлор. Может быть, люди различают виски на вкус? Не смешите меня. Суть дела в том, что у каждой марки есть свой облик, и то, что нравится одним, не подходит для других. Люди выбирают не само виски, а его образ"',
        'Роберт Шемин: "Любое действие имеет свой риск и цену этого риска, точно также как и любое бездействие"',
    ] ;
    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log(this.props) ;
                console.log('success');
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            })


    }

    render() {
        return <div className="container">
            <div className="jumbotron">
                <h2><p className="text-info">Clockwise Clockware.</p></h2>
                <h1>Добро пожаловать</h1>
        <div className="App">
            <p></p>
            <p></p>
            <p></p>
            <img src={clock} className="App-logo" alt="logo" />
            <p></p>
            <p></p>
        </div>
            </div>
            <div className="panel-heading">Цитатка:</div>
            <div className="alert alert-dismissible alert-primary">
                {this.citation[Math.floor(Math.random() * 9)]}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(HomePageComponent);