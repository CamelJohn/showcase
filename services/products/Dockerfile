# --- Stage 1: Dependency Installation ---
FROM node:22-bullseye AS dependencies
WORKDIR /app

# Copy lockfiles and configs
COPY package*.json ./
COPY turbo.json ./
COPY .nvmrc .npmrc ./

# Copy all packages' manifests (for workspaces)
COPY apps/ apps/
COPY packages/ packages/
COPY services/ services/

# Install all deps for the monorepo
RUN npm install

# --- Stage 2: Development Server ---
FROM node:22-alpine AS dev
WORKDIR /app

# Copy node_modules and full codebase from deps stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Set working dir to the products app
WORKDIR /app/services/products

# Expose NestJS default port
EXPOSE 3001

# Run in dev mode with hot reload
CMD ["npm", "run", "start:dev"]
