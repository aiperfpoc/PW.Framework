pipeline {
    agent any

    tools {
        git 'Default-Git'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                bat 'allure generate ./allure-results --clean -o ./allure-report'
            }
        }
    }
}
