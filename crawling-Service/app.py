from flask import Flask, request, jsonify
import redis


app = Flask(__name__)


# 메뉴 크롤링, post 로 식당 정보를 받아서 크롤링 실시
@app.route('/crawling-service/delivery', methods=['POST'])
def menu_crawling():
    return jsonify()


# 크롤링한 데이터 삭제
@app.route('/crawling-service/delivery', methods=['DELETE'])
def crawling_delete():
    return jsonify()


# 메뉴 크롤링 체크
@app.route('/crawling-service/delivery/<board_id>', methods=['GET'])
def menu_crawling_check(board_id):
    return jsonify()


if __name__ == "__main__":
    app.run()
