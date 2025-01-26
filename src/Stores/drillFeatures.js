import {reactive} from "vue";
import protect from '@/assets/icons/protect.svg'
import lightning from '@/assets/icons/lightning.svg'
import power from '@/assets/icons/power.svg'
import hand from '@/assets/icons/hand.svg'

export const drillFeatures = reactive([
  {
    icon: protect,
    headline: 'Электронная защита от перегрузки',
    description: 'Предотвращает повреждение двигателя и продлевает срок службы инструмента.'
  },{
    icon: protect,
    headline: 'Электронный тормоз двигателя',
    description: 'Обеспечивает безопасность использования и точность работы за счет мгновенной остановки двигателя.'
  },{
    icon: protect,
    headline: 'Высокая мощность и универсальность',
    description: 'Эффективную работу с различными материалами, будь то дерево, металл или бетон.'
  },{
    icon: protect,
    headline: 'Электронный тормоз двигателя',
    description: 'Легкий корпус и удобная рукоятка снижают нагрузку на руки, позволяя работать дольше без усталости.'
  },
])
