/**
 * Created by Capricorncd.
 * https://github.com/xing1984
 * https://github.com/capricorncd
 * Date: 2021-05-16 10:58
 */
import { Fireworks } from '@/index'
import '@/style.scss'

// @ts-ignore
const canvas = new Fireworks(window)
document.querySelector('#app')?.append(canvas)
