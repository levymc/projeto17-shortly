import { nanoid } from 'nanoid'

// URL de exemplo
const urlExemplo = 'https://www.example.com';

// Gerando a shortUrl usando nanoid
const shortUrl = nanoid(10); // O argumento 8 define o tamanho da shortUrl (8 caracteres)

// Concatenando a shortUrl com a URL de exemplo para criar a URL completa
const shortUrlCompleta = `${urlExemplo}/${shortUrl}`;

console.log('URL original:', urlExemplo);
console.log('shortUrl gerada:', shortUrlCompleta);