import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Profile from '../components/ProfilePicture/Profile';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Profile />
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
    </Layout>
  );
};

export default Home;
