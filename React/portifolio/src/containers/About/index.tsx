import { Title } from '../../components/Title'
import { GithubSection } from './style'
import { Text } from '../../components/Text'

export const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Text typetext="primary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
      perspiciatis maiores totam unde odit vitae necessitatibus, illo,
      aspernatur, incidunt voluptas nobis placeat ab praesentium amet. Voluptas
      facilis sit ex ad?
    </Text>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Mauriciosouza8989&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mauriciosouza8989&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSection>
  </section>
)
