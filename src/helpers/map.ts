import { LngLatBounds, LngLatLike, MercatorCoordinate } from 'mapbox-gl'
import { Feature, LineString, MultiLineString } from 'geojson'

export const offsetCoordinates = (coordinates: LngLatLike, zoom: number, offset: {
    desktop: {
        x: number
        y: number
    }
    mobile?: {
        x: number
        y: number
    }
}) => {
    const actualOffset = window.innerWidth < 768 && offset.mobile ? offset.mobile : offset.desktop

    const world = MercatorCoordinate.fromLngLat(coordinates)
    const scale = 512 * Math.pow(2, zoom)
    const worldOffsetX = actualOffset.x / scale
    const worldOffsetY = actualOffset.y / scale
    const newWorld = new MercatorCoordinate(world.x + worldOffsetX, world.y + worldOffsetY)

    return newWorld.toLngLat()
}

export const zoomForBounds = (bounds: LngLatBounds, padding: {
    x: number
    y: number
}) => {
    const nw = MercatorCoordinate.fromLngLat(bounds.getNorthWest())
    const se = MercatorCoordinate.fromLngLat(bounds.getSouthEast())

    const worldWidth = Math.abs(se.x - nw.x)
    const worldHeight = Math.abs(se.y - nw.y)
    const innerWidth = window.innerWidth < 768 ? window.innerWidth - 40 : window.innerWidth - 80 - padding.x * 2
    const innerHeight = window.innerHeight - padding.y * 2
    const scaleX = innerWidth / (worldWidth * 512)
    const scaleY = innerHeight / (worldHeight * 512)
    const scale = Math.min(scaleX, scaleY)

    return Math.log2(scale)
}

export const getLineBounds = (line: Feature<LineString | MultiLineString>) => {
    const bounds = new LngLatBounds()

    line.geometry.coordinates.forEach((segment) => {
        if (Array.isArray(segment[0])) {
            segment.forEach((point) => {
                bounds.extend(point as [number, number])
            })
        } else {
            bounds.extend(segment as [number, number])
        }
    })

    return bounds
}
