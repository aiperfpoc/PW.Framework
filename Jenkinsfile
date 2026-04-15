pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/aiperfpoc/PW.Framework.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
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

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
      }
    }
  }

post {
  always {
    script {
      if (fileExists('results.xml')) {
        junit '**/results.xml'
      }
    }
    archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true, allowEmptyArchive: true
    archiveArtifacts artifacts: 'allure-report/**', fingerprint: true, allowEmptyArchive: true
  }
}
}
