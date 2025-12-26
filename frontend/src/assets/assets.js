import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Nutricao esportiva',
        image: General_physician
    },
    {
        speciality: 'Nutricao clinica',
        image: Gynecologist
    },
    {
        speciality: 'Nutricao infantil',
        image: Pediatricians
    },
    {
        speciality: 'Nutricao estetica',
        image: Dermatologist
    },
    {
        speciality: 'Nutricao funcional',
        image: Neurologist
    },
    {
        speciality: 'Nutricao geriatrica',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rafael Monteiro',
        image: doc1,
        speciality: 'Sports Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '5 anos',
        about: 'Especialista em nutrição esportiva com foco em performance e recuperação muscular. Atua no acompanhamento de atletas e praticantes de academia, montando planos alimentares personalizados para ganho de massa e redução de gordura.',
        fees: 80,
        address: {
            line1: 'Av. Nazaré, 1456',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Camila Azevedo',
        image: doc4,
        speciality: 'Clinical Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '7 anos',
        about: 'Nutricionista clínica com experiência em reeducação alimentar e tratamento de doenças metabólicas. Atua em hospitais e clínicas privadas em Belém.',
        fees: 70,
        address: {
            line1: 'Tv. Rui Barbosa, 789',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Lucas Pereira',
        image: doc7,
        speciality: 'Pediatric Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '4 anos',
        about: 'Nutricionista especializada em alimentação infantil e introdução alimentar. Trabalha com famílias e escolas, orientando práticas saudáveis desde a infância.',
        fees: 60,
        address: {
            line1: 'Av. Serzedelo Corrêa, 401',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Lucas Costa',
        image: doc10,
        speciality: 'Aesthetic Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '5 anos',
        about: 'Atua na área de nutrição estética, com foco em alimentação voltada para pele, cabelo e corpo. Trabalha com planos detox e estratégias de emagrecimento saudável.',
        fees: 85,
        address: {
            line1: 'Av. Alcindo Cacela, 700',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rodrigo Almeida',
        image: doc12,
        speciality: 'Functional Nutrition',
        degree: 'Bacharel em Nutrição - UNAMA',
        experience: '7 anos',
        about: 'Especialista em nutrição funcional, atua na personalização de dietas conforme o metabolismo e estilo de vida de cada paciente.',
        fees: 90,
        address: {
            line1: 'Av. Magalhães Barata, 950',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Nicolas Ribeiro',
        image: doc13,
        speciality: 'Functional Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '6 anos',
        about: 'Profissional que utiliza princípios da nutrição funcional para promover equilíbrio metabólico e bem-estar geral dos pacientes.',
        fees: 85,
        address: {
            line1: 'Rua Boaventura da Silva, 110',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Mariana Tavares',
        image: doc2,
        speciality: 'Sports Nutrition',
        degree: 'Bacharel em Nutrição - UEPA',
        experience: '4 anos',
        about: 'Nutricionista esportiva apaixonada por saúde e alta performance. Trabalha com acompanhamento de atletas amadores e profissionais, ajudando na melhora do rendimento físico e prevenção de lesões.',
        fees: 75,
        address: {
            line1: 'Travessa Quintino Bocaiúva, 300',
            line2: 'Belém - PA'
        }
    },
     {
        _id: 'doc8',
        name: 'Dr. Letícia Nunes',
        image: doc5,
        speciality: 'Clinical Nutrition',
        degree: 'Bacharel em Nutrição - UEPA',
        experience: '5 anos',
        about: 'Especialista em nutrição clínica voltada à prevenção e controle de doenças crônicas. Foca na qualidade de vida e na alimentação consciente.',
        fees: 65,
        address: {
            line1: 'Av. Gentil Bittencourt, 233',
            line2: 'Belém - PA'
        }
    },
   {
        _id: 'doc9',
        name: 'Dr. Eduarda Campos',
        image: doc8,
        speciality: 'Pediatric Nutrition',
        degree: 'Bacharel em Nutrição - UEPA',
        experience: '3 anos',
        about: 'Focada em nutrição infantil, desenvolve planos personalizados para crianças com restrições alimentares e deficiências nutricionais.',
        fees: 55,
        address: {
            line1: 'Rua dos Pariquis, 210',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Isabela Souza',
        image: doc11,
        speciality: 'Aesthetic Nutrition',
        degree: 'Bacharel em Nutrição - UEPA',
        experience: '4 anos',
        about: 'Nutricionista especializada em estética e bem-estar, promove alimentação voltada à beleza e à saúde da pele e do corpo.',
        fees: 80,
        address: {
            line1: 'Travessa Padre Eutíquio, 812',
            line2: 'Belém - PA'
        }
    },
     {
        _id: 'doc11',
        name: 'Dr. Carla Menezes',
        image: doc14,
        speciality: 'Geriatric Nutrition',
        degree: 'Bacharel em Nutrição - UEPA',
        experience: '9 anos',
        about: 'Nutricionista especializada em saúde do idoso, trabalha com planos voltados à manutenção de massa muscular e prevenção de doenças relacionadas à idade.',
        fees: 70,
        address: {
            line1: 'Rua Gaspar Viana, 500',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Bianca Ramos',
        image: doc15,
        speciality: 'Geriatric Nutrition',
        degree: 'Bacharel em Nutrição - UFPA',
        experience: '10 anos',
        about: 'Trabalha na área geriátrica com foco em qualidade de vida, suplementação e alimentação adaptada para idosos com restrições alimentares.',
        fees: 75,
        address: {
            line1: 'Travessa Padre Prudêncio, 230',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Felipe Andrade',
        image: doc3,
        speciality: 'Sports Nutrition',
        degree: 'Bacharel em Nutrição - UNAMA',
        experience: '6 anos',
        about: 'Profissional dedicado ao condicionamento físico e alimentação funcional voltada ao esporte. Foca em estratégias alimentares para diferentes modalidades esportivas.',
        fees: 90,
        address: {
            line1: 'Rua dos Mundurucus, 512',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Juliana Ferreira',
        image: doc6,
        speciality: 'Clinical Nutrition',
        degree: 'Bacharel em Nutrição - UNAMA',
        experience: '8 anos',
        about: 'Atua com nutrição clínica e funcional, auxiliando pacientes com sobrepeso, diabetes e distúrbios alimentares. Busca sempre promover saúde e bem-estar.',
        fees: 70,
        address: {
            line1: 'Rua dos Caripunas, 180',
            line2: 'Belém - PA'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Fernanda Lima',
        image: doc9,
        speciality: 'Pediatric Nutrition',
        degree: 'Bacharel em Nutrição - UNAMA',
        experience: '6 anos',
        about: 'Especialista em nutrição pediátrica, auxilia famílias a promoverem hábitos alimentares saudáveis para o crescimento e desenvolvimento das crianças.',
        fees: 65,
        address: {
            line1: 'Travessa 14 de Março, 320',
            line2: 'Belém - PA'
        }
    },
]