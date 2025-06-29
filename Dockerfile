FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache g++ make py3-pip libc6-compat
COPY package*.json ./
EXPOSE 3000

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build


FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

CMD npm start
