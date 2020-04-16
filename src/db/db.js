import frances from '../assets/images/pan-frances.jpg';
import miñon from '../assets/images/pan-miñon.jpg';
import individual from '../assets/images/pan-individual.jpg';
import casero from '../assets/images/pan-casero.jpg';
import flautin from '../images/pan-flautin.jpg';
import hamburguesa from '../assets/images/pan-hamburguesa.jpg';
import lomo from '../assets/images/pan-lomo.jpg';
import viena from '../assets/images/pan-viena.jpg';
import criolloDeHojaldre from '../assets/images/criollos-hojaldre.jpg';
import criolloComun from '../assets/images/criollos-comunes.jpg';
import chipacas from '../assets/images/chipacas.jpeg';
import cuernitos from '../assets/images/cuernitos.jpg';
import medialunas from '../assets/images/medialunas.jpg';
import medialunasDulceDeLeche from '../assets/images/medialuna-dulcedeleche.jpg';
import facturaDeCrema from '../assets/images/factura-crema.jpg';
import facturaDeMembrillo from '../assets/images/factura-membrillo.jpg';
import facturaDeDulceDeLeche from '../assets/images/factura-dulcedeleche.jpeg';
import facturaCaraSucia from '../assets/images/factura-carasucia.jpg';
import tortaDeFrutilla from '../assets/images/torta-frutilla.jpg';
import tortaDeDurazno from '../assets/images/torta-durazno.jpg';
import tortaDeMilHojas from '../assets/images/torta-milhojas.jpg';
import tortaBrownie from '../assets/images/torta-brownie.jpg';
import tortaGanache from '../assets/images/torta-ganache.jpg';
import tortaSelvaNegra from '../assets/images/torta-selvanegra.jpeg';
import tortaRogel from '../assets/images/torta-rogel.jpg';
import alfajorDeMaicena from '../assets/images/alfajor-maicena.jpg';
import alfajorDeChocolate from '../assets/images/alfajor-chocolate.jpg';
import alfajorDeMembrillo from '../assets/images/alfajor-membrillo.jpg';
import galletaDeMiel from '../assets/images/galleta-miel.jpg';
import galletaDeChipsDeChocolate from '../assets/images/galleta-chips.jpg';
import cañoncitos from '../assets/images/cañoncitos.jpg';
import palmeritas from '../assets/images/palmeritas.jpg';
import muffin from '../assets/images/muffin.jpg';
import brownie from '../assets/images/brownie.jpg';
import panDeSalvado from '../assets/images/pan-salvado.jpg';
import panDeCereales from '../assets/images/pan-cereales.jpg';
import panFortificado from '../assets/images/pan-fortificado.jpg';
import promos from '../assets/images/promos.jpg';

export const categories = [
    {
        name: 'Promos',
        description: 'Medialunas, pan chiollo, alfajores de chocolate, etc.',
        image: promos,
        items: [
            {
                name: 'Panes de salvado',
                weight: 'unidad',
                price: '120',
                image: panDeSalvado,
                id:'panDeSalvado'
            },
            {
                name: 'Panes de cereales',
                weight: 'unidad',
                price: '170',
                image: panDeCereales,
                id:'panDeCereales'
            },
            {
                name: 'Panes fortificados',
                weight: 'unidad',
                price: '150',
                image: panFortificado,
                id:'panFortificado'
            },
        ]
    },
    {
        name: 'Panes leudados',
        description: 'Francés, miñón, individual, caseros, flautines, hamburguesas, lomo, viena, etc.',
        image: frances,
        items: [
            {
                name: 'Francés',
                weight: 'gramo',
                price: '100',
                image: frances,
                id:'frances'
            },
            {
                name: 'Miñón',
                weight: 'gramo',
                price: '110',
                image: miñon,
                id:'miñon'
            },
            {
                name: 'Individual',
                weight: 'gramo',
                price: '70',
                image: individual,
                id:'individual'
            },
            {
                name: 'Caseros',
                weight: 'gramo',
                price: '120',
                image: casero,
                id:'casero'
            },
            {
                name: 'Flautines',
                weight: 'gramo',
                price: '110',
                image: flautin,
                id:'flautin'
            },
            {
                name: 'Hamburguesas',
                weight: 'gramo',
                price: '100',
                image: hamburguesa,
                id:'hamburguesa'
            },
            {
                name: 'Lomo',
                weight: 'gramo',
                price: '100',
                image: lomo,
                id:'lomo'
            },
            {
                name: 'Viena',
                weight: 'gramo',
                price: '110',
                image: viena,
                id:'viena'
            }
        ]
    },
    {
        name: 'Panes oleicos',
        description: 'Criollos, criollos de hojaldre, bizcochos, chipacas, cuernitos, etc.',
        image: criolloDeHojaldre,
        items: [
            {
                name: 'Criollos',
                weight: 'gramo',
                price: '100',
                image: criolloComun,
                id:'criolloComun'
            },
            {
                name: 'Criollos de hojaldre',
                weight: 'gramo',
                price: '110',
                image: criolloDeHojaldre,
                id:'criolloDeHojaldre'
            },
            {
                name: 'Chipacas',
                weight: 'gramo',
                price: '120',
                image: chipacas,
                id:'chipacas'
            },
            {
                name: 'Cuernitos',
                weight: 'gramo',
                price: '110',
                image: cuernitos,
                id:'cuernitos'
            },
        ]
    },
    {
        name: 'Medialunas',
        description: 'Medialunas, medialunas de dulce de leche, etc.',
        image: medialunas,
        items: [
            {
                name: 'Medialunas',
                weight: 'gramo',
                price: '200',
                image: medialunas,
                id:'medialunas'
            },
            {
                name: 'Medialunas de dulce de leche',
                weight: 'gramo',
                price: '210',
                image: medialunasDulceDeLeche,
                id:'medialunasDulceDeLeche'
            },
        ]
    },
    {
        name: 'Facturas',
        description: 'Facturas de crema, facturas de membrillo, facturas de dulce de leche, cara sucia, etc.',
        image: facturaDeCrema,
        items: [
            {
                name: 'Facturas de crema',
                weight: 'gramo',
                price: '210',
                image: facturaDeCrema,
                id:'facturaDeCrema'
            },
            {
                name: 'Facturas de membrillo',
                weight: 'gramo',
                price: '210',
                image: facturaDeMembrillo,
                id:'facturaDeMembrillo'
            },
            {
                name: 'Facturas de dulce de leche',
                weight: 'gramo',
                price: '220',
                image: facturaDeDulceDeLeche,
                id:'facturaDeDulceDeLeche'
            },
            {
                name: 'Cara sucia',
                weight: 'gramo',
                price: '210',
                image: facturaCaraSucia,
                id:'facturaCaraSucia'
            },
        ]
    },
    {
        name: 'Tortas',
        description: 'Frutilla, Durazno, Mil hojas, Tiramisú, Brownies, Ganache, Selva Negra, Rogel, etc.',
        image: tortaDeFrutilla,
        items: [
            {
                name: 'Frutilla',
                weight: 'unidad',
                price: '500',
                image: tortaDeFrutilla,
                id:'tortaDeFrutilla'
            },
            {
                name: 'Durazno',
                weight: 'unidad',
                price: '500',
                image: tortaDeDurazno,
                id:'tortaDeDurazno'
            },
            {
                name: 'Mil hojas',
                weight: 'unidad',
                price: '800',
                image: tortaDeMilHojas,
                id:'tortaDeMilHojas'
            },
            {
                name: 'Brownies',
                weight: 'unidad',
                price: '400',
                image: tortaBrownie,
                id:'tortaBrownie'
            },
            {
                name: 'Ganache',
                weight: 'unidad',
                price: '600',
                image: tortaGanache,
                id:'tortaGanache'
            },
            {
                name: 'Selva Negra',
                weight: 'unidad',
                price: '700',
                image: tortaSelvaNegra,
                id:'tortaSelvaNegra'
            },
            {
                name: 'Rogel',
                weight: 'unidad',
                price: '600',
                image: tortaRogel,
                id:'tortaRogel'
            },
        ]
    },
    {
        name: 'Espacialidades',
        description: 'Alfajores de maicena, alfajores de chocolate, alfajores de membrillo, cañoncitos con dulce de leche, etc.',
        image: alfajorDeChocolate,
        items: [
            {
                name: 'Alfajores de Maicena',
                weight: 'unidad',
                price: '30',
                image: alfajorDeMaicena,
                id:'alfajorDeMaicena'
            },
            {
                name: 'Alfajores de Chocolate',
                weight: 'unidad',
                price: '30',
                image: alfajorDeChocolate,
                id:'alfajorDeChocolate'
            },
            {
                name: 'Alfajores de membrillo',
                weight: 'unidad',
                price: '30',
                image: alfajorDeMembrillo,
                id:'alfajorDeMembrillo'
            },
            {
                name: 'Galletas de miel',
                weight: 'unidad',
                price: '20',
                image: galletaDeMiel,
                id:'galletaDeMiel'
            },
            {
                name: 'Galletas chips de chocolate',
                weight: 'unidad',
                price: '25',
                image: galletaDeChipsDeChocolate,
                id:'galletaDeChipsDeChocolate'
            },
            {
                name: 'Cañoncitos con dulce de leche',
                weight: 'unidad',
                price: '30',
                image: cañoncitos,
                id:'cañoncitos'
            },
            {
                name: 'Palmeritas o Napolitano',
                weight: 'unidad',
                price: '20',
                image: palmeritas,
                id:'palmeritas'
            },
            {
                name: 'Muffins',
                weight: 'unidad',
                price: '30',
                image: muffin,
                id:'muffin'
            },
            {
                name: 'Brownies',
                weight: 'unidad',
                price: '20',
                image: brownie,
                id:'brownie'
            },
        ]
    },
    {
        name: 'Saludables',
        description: 'Panes de salvado, pan de cereales, panes fortificados, etc.',
        image: panDeCereales,
        items: [
            {
                name: 'Panes de salvado',
                weight: 'gramo',
                price: '100',
                image: panDeSalvado,
                id:'panDeSalvado'
            },
            {
                name: 'Panes de cereales',
                weight: 'gramo',
                price: '100',
                image: panDeCereales,
                id:'panDeCereales'
            },
            {
                name: 'Panes fortificados',
                weight: 'gramo',
                price: '100',
                image: panFortificado,
                id:'panFortificado'
            },
        ]
    },
]