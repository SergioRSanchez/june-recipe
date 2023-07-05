'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MinusCircle,
  PlusCircle,
  Utensils,
  Soup,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import pamonha from '@/assets/pamonha.png'
import pacoca from '@/assets/pacoca.png'
import bolo from '@/assets/bolo.png'

interface Recipe {
  name: string
  icon: string
  description: string
  ingredients: {
    [key: string]: string
  }
  preparation: {
    [key: string]: string
  }
}

export default function Home() {
  const [quantity, setQuantity] = useState(1)

  const [recipeIndex, setRecipeIndex] = useState(0)

  function decreaseQuantity() {
    if (quantity === 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  }

  function increaseRecipeIndex() {
    if (recipeIndex === 2) {
      setRecipeIndex(0)
    } else {
      setRecipeIndex(recipeIndex + 1)
    }
  }

  function decreaseRecipeIndex() {
    if (recipeIndex === 0) {
      setRecipeIndex(2)
    } else {
      setRecipeIndex(recipeIndex - 1)
    }
  }

  const recipe: Recipe[] = [
    {
      name: 'Pamonha',
      icon: 'pamonha',
      description: 'Prato típico com milho verde ralado',
      ingredients: {
        0: `${1 * quantity} espiga de milho verde`,
        1: `${1 * quantity} colher de sopa de açúcar`,
        2: `${1 * quantity} colher de sopa de manteiga`,
        3: 'Sal a gosto',
        4: 'Palha de milho (para embrulhar)',
      },
      preparation: {
        0: 'Descasque a espiga de milho e corte os grãos.',
        1: 'Bata o milho, açucar, manteiga e sal no liquidificador.',
        2: 'Coloque a massa nas palhas de milho e feche bem.',
        3: 'Cozinhe em água fervente por cerca de 40 minutos.',
        4: 'Deixe esfriar e sirva.',
      },
    },
    {
      name: 'Paçoca',
      icon: 'paçoca',
      description: 'Doce típico feito de amendoim',
      ingredients: {
        0: `${500 * quantity}g de amendoim torrado`,
        1: `${1 * quantity} lata de leite condensado`,
        2: `${1 * quantity} pacote de bolacha maizena`,
      },
      preparation: {
        0: 'Bata o amendoim no liquidificador até que fique triturado.',
        1: 'Misture todos os ingredientes em uma vasilha grande.',
        2: 'Bata a bolacha no liquidificador e junte ao amendoim.',
        3: 'Misture o leite condensado até que fique uma pasta.',
        4: 'Coloque em uma forma untada e deixe descansar.',
        5: 'Corte e sirva.',
      },
    },
    {
      name: 'Bolo de Fubá',
      icon: 'bolo',
      description: 'Bolo tradicional',
      ingredients: {
        0: `${3 * quantity} ovos`,
        1: `${2 * quantity} xícaras de fubá`,
        2: `${0.5 * quantity} copo americano de óleo`,
        3: `${1 * quantity} colher de fermento em pó`,
        4: `${2 * quantity} xícaras de chá de açúcar`,
        5: `${3 * quantity} colheres de sopa de farinha de trigo`,
        6: `${1 * quantity} copo de leite`,
      },
      preparation: {
        0: 'Bata todos os ingredientes no liquidificador.',
        1: 'Coloque em uma forma untada e enfarinhada.',
        2: 'Leve ao forno pré aquecido e deixe assar, por cerca de 40 minutos.',
      },
    },
  ]

  const currentRecipe = recipe[recipeIndex]

  return (
    <div className="flex h-screen flex-col">
      {/* CIMA */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#FEECE0] py-3 sm:flex-row sm:py-14">
        {recipeIndex === 0 ? (
          <Image
            src={pamonha}
            alt="pamonha"
            className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] "
          />
        ) : null}
        {recipeIndex === 1 ? (
          <Image
            src={pacoca}
            alt="paçoca"
            className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] "
          />
        ) : null}
        {recipeIndex === 2 ? (
          <Image
            src={bolo}
            alt="bolo de fubá"
            className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] "
          />
        ) : null}
        <div className="flex flex-col gap-3 text-center sm:gap-7 sm:text-start">
          <div className="flex items-center justify-center text-center sm:justify-start sm:gap-3">
            <button onClick={decreaseRecipeIndex}>
              <ChevronLeft
                color="#9B6647"
                className="h-7 w-7 transition-all duration-200 hover:scale-110 hover:brightness-75 sm:h-8 sm:w-8"
              />
            </button>
            <h1 className="text-6xl font-bold text-[#58190A] sm:text-7xl">
              {recipe[recipeIndex].name}
            </h1>
            <button onClick={increaseRecipeIndex}>
              <ChevronRight
                color="#9B6647"
                className="h-7 w-7 transition-all duration-200 hover:scale-110 hover:brightness-75 sm:h-8 sm:w-8"
              />
            </button>
          </div>
          <p className="text-3xl text-[#58190A] sm:text-4xl">
            {recipe[recipeIndex].description}
          </p>
          <div className="flex items-center justify-center gap-4 text-3xl text-[#9B6647] sm:justify-start">
            <span>Porções</span>
            <div className="flex items-center gap-5">
              <button onClick={decreaseQuantity}>
                <MinusCircle
                  color="#9B6647"
                  className="h-7 w-7 transition-all duration-200 hover:scale-110 hover:brightness-75 sm:h-8 sm:w-8"
                />
              </button>
              <span className="font-sans text-3xl sm:text-4xl">
                0{quantity}
              </span>
              <button onClick={() => setQuantity(quantity + 1)}>
                <PlusCircle
                  color="#9B6647"
                  className="h-7 w-7 transition-all duration-200 hover:scale-110 hover:brightness-75 sm:h-8 sm:w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BAIXO */}
      <div className="flex flex-1 flex-col justify-between gap-5 bg-[#9B6647] p-4 sm:flex-row sm:px-12 sm:py-16">
        {/* Ingredientes */}
        <div className="flex flex-col gap-3 sm:ml-[90px] sm:gap-8">
          <div className="flex items-center gap-2">
            <Utensils color="#FEECE0" className="h-7 w-7 sm:h-8 sm:w-8" />
            <p className="text-3xl font-bold text-[#FEECE0] sm:text-4xl">
              Ingredientes
            </p>
          </div>

          {/* Itens */}
          <div className="text-xl text-white sm:text-2xl">
            <ol className="list-inside list-disc leading-8 sm:leading-9">
              {Object.keys(currentRecipe.ingredients).map((key) => (
                <li key={key}>{currentRecipe.ingredients[key]}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modo de Preparo */}
        <div className="flex flex-col gap-3 sm:mr-[90px] sm:gap-8">
          <div className="flex items-center gap-2">
            <Soup color="#FEECE0" className="h-7 w-7 sm:h-8 sm:w-8" />
            <p className="text-3xl font-bold text-[#FEECE0] sm:text-4xl">
              Modo de preparo
            </p>
          </div>

          {/* Itens */}
          <div className="text-xl text-white sm:text-2xl">
            <ol className="max-w-[650px] list-inside list-decimal leading-8 sm:leading-9">
              {Object.keys(currentRecipe.preparation).map((key) => (
                <li key={key}>{currentRecipe.preparation[key]}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
