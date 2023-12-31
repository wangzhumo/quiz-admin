import { MessageKeys } from '@/locales'
import classnames from 'classnames'
import { Button } from 'grommet'
import { useEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import styles from './notFound.module.css'

interface NotFoundProps {
  content?: string
}

interface StarBackgroundProps {
  classNames?: string
}

interface SkyData {
  r: number
  x: number
  y: number
}

const StarBackgroundComponent = (props: StarBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const maxStar = 300
  const [skyList, setSkyList] = useState<SkyData[]>([])
  const [canvasCtx, setCanvasCtx] = useState<CanvasRenderingContext2D | null>(
    null
  )
  const initialCanvas = (element: HTMLDivElement) => {
    const maxWidth = element.offsetWidth * 2
    const maxHeight = element.offsetHeight * 2
    const canvas = document.createElement('canvas')
    canvas.width = maxWidth
    canvas.height = maxHeight
    element.appendChild(canvas)
    const canvasElement = element.querySelector('canvas')
    canvasElement?.setAttribute('style', 'width:100%; height:100%')
    const ctx = canvas.getContext('2d')
    setCanvasCtx(ctx)
  }

  const drawStars = (element: HTMLDivElement) => {
    if (canvasCtx === null) {
      return
    }
    const maxWidth = element.offsetWidth * 2
    const maxHeight = element.offsetHeight * 2
    // start draw
    const skyList = []
    for (let i = 0; i < maxStar; i++) {
      const r = ~~(Math.random() * 4)
      const x = ~~(Math.random() * maxWidth)
      const y = ~~(Math.random() * maxHeight)
      skyList.push({ x, y, r })
    }
    setSkyList(skyList)
  }

  const drawStarList = (skyList: SkyData[]) => {
    if (!canvasCtx) {
      return
    }
    for (let i = 0; i < skyList.length; i++) {
      canvasCtx.fillStyle = '#5F5F60'
      canvasCtx.beginPath()
      canvasCtx.arc(skyList[i].x, skyList[i].y, skyList[i].r, 0, 2 * Math.PI)
      canvasCtx.fill()
    }
  }

  useEffect(() => {
    const element = containerRef.current
    if (element) {
      initialCanvas(element)
    }
  }, [])

  useEffect(() => {
    const element = containerRef.current
    if (canvasCtx && element) {
      drawStars(element)
    }
  }, [canvasCtx])

  useEffect(() => {
    const element = containerRef.current
    if (!element) {
      return
    }
    drawStarList(skyList)
  }, [skyList])

  return (
    <div
      className={classnames(styles.starContainer, props.classNames)}
      ref={containerRef}
    />
  )
}

export const NotFoundPage = (props: NotFoundProps) => {
  const nav = useNavigate()
  const onLinkClick = () => {
    nav('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.roundContainer}>
        <div className={styles.lbRound} />
        <svg
          className={styles.trRound}
          xmlns='http://www.w3.org/2000/svg'
          width='110'
          height='212'
          viewBox='0 0 110 212'
          fill='none'
        >
          <g filter='url(#filter0_i_11210_289146)'>
            <circle
              cx='105.928'
              cy='105.928'
              r='105.084'
              transform='rotate(-179.538 105.928 105.928)'
              fill='url(#paint0_linear_11210_289146)'
              fillOpacity='0.03'
            />
          </g>
          <defs>
            <filter
              id='filter0_i_11210_289146'
              x='0.844116'
              y='0.844025'
              width='226.169'
              height='232.169'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='16' dy='22' />
              <feGaussianBlur stdDeviation='16' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect1_innerShadow_11210_289146'
              />
            </filter>
            <linearGradient
              id='paint0_linear_11210_289146'
              x1='45.1883'
              y1='29.91'
              x2='165.923'
              y2='169.463'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#7C3388' />
              <stop offset='0.828125' stopOpacity='0.9' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <StarBackgroundComponent classNames={styles.backgroundContainer} />
      <div className={styles.contentContainer}>
        <div className={styles.text}>
          <FormattedMessage id={MessageKeys.notFound.oops} />
        </div>
        <div className={styles.hint}>
          <FormattedMessage id={MessageKeys.notFound.hint} />
        </div>
        <div className={styles.planetContainer}>
          <svg
            className={styles.left}
            xmlns='http://www.w3.org/2000/svg'
            width='128'
            height='272'
            viewBox='0 0 128 272'
            fill='none'
          >
            <path
              d='M85.6684 271.433L85.2964 193.019H0L0.372067 183.253L81.4829 0.195114H89.3891L7.53411 184.369V186.973L85.2964 186.601L87.5288 80.7911H92.8305V186.973L127.34 186.601L126.968 193.019L92.8305 193.391V271.805L85.6684 271.433Z'
              fill='white'
              fillOpacity='0.3'
            />
          </svg>
          <div className={styles.planetRect}>
            <div className={styles.planetInnerContainer}>
              <div className={styles.planet}>
                <div className={styles.planetInner} />
              </div>
            </div>
            <svg
              className={styles.planetLine}
              width='487'
              height='322'
              viewBox='0 0 487 322'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M456.866 226.392C452.948 239.111 443.347 249.502 429.185 257.37C415.017 265.241 396.337 270.554 374.407 273.115C330.55 278.238 273.887 272.334 214.837 254.145C155.787 235.957 105.623 208.954 72.2494 180.043C55.5614 165.586 43.1084 150.684 35.8247 136.205C28.544 121.732 26.4536 107.74 30.3715 95.0211C34.2894 82.3017 43.8901 71.9113 58.0522 64.0433C72.2204 56.1721 90.9001 50.8595 112.83 48.2981C156.687 43.1756 213.35 49.079 272.4 67.2678C331.45 85.4566 381.614 112.459 414.988 141.37C431.676 155.827 444.129 170.729 451.413 185.208C458.693 199.681 460.784 213.673 456.866 226.392Z'
                stroke='url(#paint0_linear_339_1169)'
                strokeWidth='2'
              />
              <g filter='url(#filter0_bd_339_1169)'>
                <circle
                  cx='130.758'
                  cy='219'
                  r='16'
                  fill='white'
                  fillOpacity='0.8'
                  shapeRendering='crispEdges'
                />
              </g>
              <defs>
                <filter
                  id='filter0_bd_339_1169'
                  x='106.758'
                  y='195'
                  width='48'
                  height='48'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feGaussianBlur in='BackgroundImageFix' stdDeviation='3' />
                  <feComposite
                    in2='SourceAlpha'
                    operator='in'
                    result='effect1_backgroundBlur_339_1169'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='4' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.88 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='effect1_backgroundBlur_339_1169'
                    result='effect2_dropShadow_339_1169'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow_339_1169'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_339_1169'
                  x1='269.623'
                  y1='87.2999'
                  x2='214.543'
                  y2='255.101'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='1' stopColor='white' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <svg
            className={styles.right}
            xmlns='http://www.w3.org/2000/svg'
            width='128'
            height='272'
            viewBox='0 0 128 272'
            fill='none'
          >
            <path
              d='M85.6684 271.433L85.2964 193.019H0L0.372067 183.253L81.4829 0.195114H89.3891L7.53411 184.369V186.973L85.2964 186.601L87.5288 80.7911H92.8305V186.973L127.34 186.601L126.968 193.019L92.8305 193.391V271.805L85.6684 271.433Z'
              fill='white'
              fillOpacity='0.3'
            />
          </svg>
        </div>
        <Button className={styles.back} onClick={onLinkClick}>
          <div className={styles.backText}>
            <FormattedMessage id={MessageKeys.notFound.goBack} />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
