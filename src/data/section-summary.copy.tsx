import ExternalLink from "../components/ui/common/ExternalLink";
import Paragraph from "../components/ui/common/Paragraph";
import PullUpEffect from "../components/ui/motion/pull-up-effect/PullUpEffect";
import TypingEffect from "../components/ui/motion/TypingEffect";

export const copyTributesSummary = {
  title: <PullUpEffect text="Tributos" />,
  sub_title: <PullUpEffect text="Distrito 3" />,
  description: (
    <Paragraph>
      <TypingEffect text="Aplicações em destaque focadas em React. Para explorar meu fluxo de trabalho completo e outros repositórios, acesse a " />
      <ExternalLink href="#">
        <TypingEffect text="• Cornucópia (GitHub) •" baseDelay={1.18} />
      </ExternalLink>
    </Paragraph>
  ),
};

export const copyToolsSummary = {
  title: <PullUpEffect text="Ferramentas" />,
  sub_title: <PullUpEffect text="Distrito 4" />,
  description: (
    <Paragraph>
      <TypingEffect text="Projetando interfaces para agradar até o público mais exigente da Capital." />
    </Paragraph>
  ),
};

export const copyTrainingsSummary = {
  title: <PullUpEffect text="Treinamento" />,
  sub_title: <PullUpEffect text="Distrito 2" />,
  description: (
    <Paragraph>
      <TypingEffect text="O conhecimento técnico é a única vantagem que não pode ser confiscada." />
    </Paragraph>
  ),
};

export const copyContactSummary = {
  title: <PullUpEffect text="Contato" />,
  sub_title: <PullUpEffect text="Distrito 1" />,
  description: (
    <Paragraph>
      <TypingEffect
        text="Procurando um aliado para o seu próximo projeto? Envie um tordo
      mensageiro."
      />
    </Paragraph>
  ),
};
