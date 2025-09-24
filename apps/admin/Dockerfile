# apps/admin/Dockerfile

# --- Stage 1: Dependency Installation ---
FROM node:22-bullseye AS dependencies
WORKDIR /app

# Copy lockfiles and configuration files for caching
COPY package*.json ./
COPY turbo.json ./
COPY .nvmrc .npmrc ./

# Copy all packages' package.json and source code
COPY apps/ apps/
COPY packages/ packages/

# Install dependencies for the whole monorepo
RUN npm install

# --- Stage 2: Development Server ---
FROM node:22-alpine AS dev
WORKDIR /app

# Copy dependencies and the full codebase from the previous stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Set the working directory to the admin app for running
WORKDIR /app/apps/admin

COPY --from=dependencies /app/node_modules ./

# Expose Vite dev server port
EXPOSE 5174

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]
