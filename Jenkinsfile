pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Create Secure .env file') {
            steps {
                withCredentials([string(credentialsId: 'backend-port', variable: 'BACKEND_PORT')]) {
                    writeFile file: 'backend/.env', text: """
PORT=${BACKEND_PORT}
NODE_ENV=production
"""
                }
            }
        }

        stage('Build and Run using Docker Compose') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose build'
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        failure {
            echo '❌ Build or Deployment failed!'
        }
    }
}
