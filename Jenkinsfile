pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'simplebackend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔧 Building Docker image...'
                bat 'docker build -t %DOCKER_IMAGE% ./backend'
            }
        }

        stage('Run Docker Container') {
             steps {
                echo '🚀 Running Docker container...'
                bat '''
                docker stop simple_container || exit 0
                docker rm simple_container || exit 0
                docker run -d -p 5001:5000 --name simple_container simplebackend
                '''
            }
        }
    }

    post {
        failure {
            echo '❌ Build or Deployment failed!'
        }
    }
}
