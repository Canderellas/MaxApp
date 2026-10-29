# ---------- Этап 1: сборка ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Сначала копируем только файлы зависимостей — для кеширования слоёв
COPY package*.json ./

# Чистая установка зависимостей (без dev-мусора в финальном образе не нужна,
# но для сборки devDependencies нужны, поэтому ставим всё)
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build

# ---------- Этап 2: раздача через Nginx ----------
FROM nginx:1.27-alpine

# Копируем собранную статику из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем свой конфиг Nginx (см. ниже)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]