
import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>

      <section className="mb-8">
        <p className="mb-4">서비스 이용에 대한 문의, 제안, 불편 사항 등 궁금한 점이 있으시면 아래 이메일 주소로 연락 주시기 바랍니다.</p>
        <p className="text-lg font-semibold">이메일: peter_ever@outlook.com</p>
        <p className="mt-4">최대한 빠르게 답변해 드리겠습니다.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">문의 양식</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">메시지</label>
            <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            보내기
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUsPage;
