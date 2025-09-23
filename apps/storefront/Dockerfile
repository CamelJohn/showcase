# apps/storefront/Dockerfile

# --- Stage 1: Dependency Installation ---
FROM node:22-alpine AS dependencies
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

# Set the working directory to the storefront app for running
WORKDIR /app/apps/storefront

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
