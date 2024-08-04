import './skills.css';
import Card from '../../components/Card';
import data from './data';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="skills light">
              <div className="skills__icon">{item.icon}</div>
              <div className="skills__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
