import { Overlay } from 'trading-vue-js'

export default {
  name: 'Inflection',
  mixins: [Overlay],
  methods: {
    draw(ctx) { 
      let layout = this.$props.layout // Layout object
      ctx.lineWidth = 1.5
      ctx.strokeStyle = 'black'
      for (var p of this.$props.data) {
        ctx.fillStyle = '#FFA500'
        ctx.beginPath()
        let x = layout.t2screen(p[0]) // x - Mapping
        let y = layout.$2screen(p[1]) // y - Mapping
        ctx.arc(x, y, 5.5, 0, Math.PI * 2, true) // inflection point
        ctx.fill()
        ctx.stroke()
      }

    },
    use_for() { return ['Inflection'] }
  }
}