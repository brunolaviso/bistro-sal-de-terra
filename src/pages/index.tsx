import type { NextPage } from 'next'
import { Background, Logo, ParagraphWrapper, Paragraph, Schedule, Emphasis, Address } from '../styles/Home/_styles'
import background from '../../public/background.png';

const Home: NextPage = () => {
  console.log(background);

  return (
    <Background image={background}>
      <Logo src="./logo-bistro.svg" alt="Logo do Bistro Sal de Terra" />
      <ParagraphWrapper>
        <Paragraph>
          O <Emphasis>Bistrô Sal de Terra</Emphasis> é um bar/restaurante alternativo, acolhedor e diferente da ideia de bistrô que você encontra por aí.
        </Paragraph>
        <Paragraph>
          O conceito de Bistrô é na verdade, o de um restaurante simples, onde famílias passaram a abrir suas casas para vender refeições caseiras ao público.
        </Paragraph>
        <Paragraph>
          E com esse sentimento intimista de permitir que você <Emphasis>se sinta em casa</Emphasis>, o que era pra ser uma casa de temperos e especiarias em agosto de 2016, se tornou o Bistrô Sal de Terra. Nessa construção existe muita história pra contar, além de muitas pessoas especiais que ajudaram a tornar esse espaço realidade.
        </Paragraph>
        <Paragraph>
          Nosso cardápio traz desde hambúrgueres artesanais, porções que produzimos optando sempre por fornecedores locais e temperos naturais.
        </Paragraph>
      </ParagraphWrapper>
      <Schedule>
        De quarta a sábado, a partir das 18h
      </Schedule>
      <Address>
        Rua Prudente de Morais, 1361
      </Address>
      <Address>
        Vila Nova - Barra Bonita SP 17340-025
      </Address>
    </Background>
  )
}

export default Home
