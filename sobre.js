class MainContent extends React.Component {
  render() {
    return (
      <div className="content" style={{ width: '99%', margin: 'auto', textAlign: 'left', lineHeight: '1.6' }}>
        <p>O <strong>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</strong> – é uma autarquia federal de ensino.</p>

        <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>

        <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>

        <p>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</p>

        <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</p>

        <p>O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.;</p>
        
        <p>Localizado em <strong>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</strong></p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <MainContent />
      </>
    );
  }
}

const domNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);