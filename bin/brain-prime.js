#!/usr/bin/env node
import Bodygames from '../src/bodygames.js'
import BrainPrime from '../src/games/prime.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

Bodygames(description, BrainPrime)
