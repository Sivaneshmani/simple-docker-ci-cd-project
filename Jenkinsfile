pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Build and Run using Docker Compose') {
            steps {
                echo '🔧 Building & Running containers...'
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
