import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';

const VerticalFeatures: Function = (): JSX.Element => (
  <Section
    title="Sobre nossos recursos"
    description="Antes de começar veja um pouco mais das informações logo abaixo para ter uma melhor experiência durante o uso da plataforma."
  >
    <VerticalFeatureRow
      title="Faturas e despesas"
      description="Descrição..."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Veja sua evolução"
      description="Descrição..."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Vença suas Dívidas"
      description="Descrição..."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
